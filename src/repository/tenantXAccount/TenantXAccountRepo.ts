import { PrismaClient, TenantAccount } from '@prisma/client';

export default class TenantAccountRepo {
  constructor(private readonly client: PrismaClient) {}

  async addTenantAccount(tenantId: string, accountId: string, role: string) {
    return await this.client.tenantAccount.create({
      data: {
        tenantId,
        accountId,
        role
      }
    });
  }

  async updateTenantAccount(
    tenantId: string,
    accountId: string,
    params: Partial<TenantAccount>
  ) {
    return await this.client.tenantAccount.update({
      where: {
        tenantId_accountId: {
          tenantId,
          accountId
        }
      },
      data: params
    });
  }

  async deleteTenantAccount(tenantId: string, accountId: string) {
    return await this.client.tenantAccount.deleteMany({
      where: {
        tenantId,
        accountId
      }
    });
  }

  async deleteAllTenantAccounts() {
    return await this.client.tenantAccount.deleteMany({});
  }
}
