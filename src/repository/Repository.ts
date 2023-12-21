import { PrismaClient } from '@prisma/client';
import TenantRepo from './tenant/TenantRepo';
import AccountRepo from './account/AccountRepo';
import TenantXAccountRepo from './tenantXAccount/TenantXAccountRepo';

export default class Repository {
  private readonly client: PrismaClient;
  readonly tenantRepo: TenantRepo;
  readonly accountRepo: AccountRepo;
  readonly tenantAccountRepo: TenantXAccountRepo;

  constructor() {
    this.client = new PrismaClient();
    this.tenantRepo = new TenantRepo(this.client);
    this.accountRepo = new AccountRepo(this.client);
    this.tenantAccountRepo = new TenantXAccountRepo(this.client);
  }
}
