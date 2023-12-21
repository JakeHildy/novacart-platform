import { PrismaClient, Tenant } from '@prisma/client';

export default class TenantRepo {
  constructor(private readonly client: PrismaClient) {}

  async selectTenant(tenant: string) {
    return await this.client.tenant.findUnique({
      where: { tenant }
    });
  }

  async insertTenant(tenant: Tenant) {
    return await this.client.tenant.create({
      data: tenant
    });
  }

  async deleteTenant(tenantId: string) {
    return await this.client.tenant.delete({
      where: { id: tenantId }
    });
  }

  async deleteAllTenants() {
    return await this.client.tenant.deleteMany({});
  }
}
