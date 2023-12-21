import {
  expect,
  describe,
  it,
  beforeEach,
  afterEach,
  afterAll
} from 'bun:test';
import { Account } from '@prisma/client';
import Repository from '../Repository';
import { getNewAccount } from '../../__tests__/fixtures';

const repo = new Repository();

describe('AccountRepo', () => {
  let local: {
    account: Account | null;
    accountId: string | null;
    accountId2: string | null;
  };

  beforeEach(async () => {
    local = {
      account: getNewAccount(),
      accountId: null,
      accountId2: null
    };
    local.account = await repo.accountRepo.insertAccount(local.account);
    local.accountId = local.account.id;
  });

  afterEach(async () => {
    if (local.accountId) {
      await repo.accountRepo.deleteAccount(local.accountId);
    }
    if (local.accountId2) {
      await repo.accountRepo.deleteAccount(local.accountId2);
    }
  });

  //   afterAll(async () => {
  //     await repo.tenantAccountRepo.deleteAllTenantAccounts();
  //     await repo.accountRepo.deleteAllAccounts();
  //     await repo.tenantRepo.deleteAllTenants();
  //   });

  it('creates an account', async () => {
    const newAccount = getNewAccount();
    const account2 = await repo.accountRepo.insertAccount(newAccount);
    local.accountId2 = account2.id;
    expect(account2.email).toBe(newAccount.email);
  });

  it('reads an account', async () => {
    const account = await repo.accountRepo.selectAccount(local.account.id);
    expect(account.id).toBe(local.account.id);
    expect(account.firstName).toBe(local.account.firstName);
  });

  it('updates an account', async () => {
    const updatedAccountData = {
      ...local.account,
      email: 'newemail@example.com'
    };
    const updatedAccount = await repo.accountRepo.updateAccount(
      local.account.id,
      updatedAccountData
    );
    expect(updatedAccount.email).toBe('newemail@example.com');
    expect(updatedAccount.firstName).toBe(local.account.firstName);
  });

  it('deletes an account', async () => {
    const newAccount = getNewAccount();
    const createdAccount = await repo.accountRepo.insertAccount(newAccount);
    await repo.accountRepo.deleteAccount(createdAccount.id);
    const account = await repo.accountRepo.selectAccount(createdAccount.id);
    expect(account).toBeNull();
  });
});
