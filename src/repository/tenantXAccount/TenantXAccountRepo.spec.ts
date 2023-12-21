import { expect, describe, it, beforeEach, afterEach } from 'bun:test';
import Repository from '../Repository';
import { Account, Tenant, Role } from '@prisma/client';
import { getNewAccount, getNewTenant } from '../../__tests__/fixtures';

const repo = new Repository();

describe('TenantAccountRepo', () => {
  let local: {
    account: Account | null;
    tenant: Tenant | null;
  };

  // Assuming you have methods to create/delete tenants and accounts for setup and cleanup

  beforeEach(async () => {
    local = {
      account: getNewAccount(),
      tenant: getNewTenant()
    };
    local.account = await repo.accountRepo.insertAccount(local.account);
    local.tenant = await repo.tenantRepo.insertTenant(local.tenant);
    await repo.tenantAccountRepo.addTenantAccount(
      local.tenant.id,
      local.account.id,
      'AdminOwner'
    );
  });

  afterEach(async () => {
    await repo.tenantAccountRepo.deleteTenantAccount(
      local.tenant.id,
      local.account.id
    );
    await repo.accountRepo.deleteAccount(local.account.id);
    await repo.tenantRepo.deleteTenant(local.tenant.id);
  });

  // === Comment out for now: ===
  // it('adds a TenantAccount relationship', async () => {
  //   const tenantAccount = await repo.tenantAccountRepo.addTenantAccount(
  //     local.tenant.id,
  //     local.account.id,
  //     'AdminOwner'
  //   );
  //   expect(tenantAccount.tenantId).toBe(local.tenant.id);
  //   expect(tenantAccount.accountId).toBe(local.account.id);
  //   expect(tenantAccount.role).toBe('AdminOwner');
  //   await repo.tenantAccountRepo.deleteTenantAccount(
  //     local.tenant.id,
  //     local.account.id
  //   );
  // });
  /// ===========================

  it('updates a TenantAccount relationship', async () => {
    const params = {
      role: 'Basic'
    };
    const newTenantAccount = await repo.tenantAccountRepo.updateTenantAccount(
      local.tenant.id,
      local.account.id,
      params
    );
    expect(newTenantAccount.role).toBe('Basic'); // Assuming updateMany returns a count of updated records
  });

  //   it('deletes a TenantAccount relationship', async () => {
  //     await repo.tenantAccountRepo.addTenantAccount(tenantId, accountId);
  //     const deleteResult = await repo.tenantAccountRepo.deleteTenantAccount(
  //       tenantId,
  //       accountId
  //     );
  //     expect(deleteResult.count).toBe(1); // Assuming deleteMany returns a count of deleted records
  //   });
});
