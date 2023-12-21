import {
  expect,
  describe,
  it,
  afterAll,
  afterEach,
  beforeEach
} from 'bun:test';
import Repository from '../Repository';
import { getNewTenant } from '../../__tests__/fixtures';
import { Tenant } from '@prisma/client';

const repo = new Repository();

describe('TenantRepo', () => {
  let local: {
    tenant: Tenant | null;
    tenant2: Tenant | null;
  };

  beforeEach(async () => {
    local = {
      tenant: getNewTenant(),
      tenant2: null
    };
    local.tenant = await repo.tenantRepo.insertTenant(local.tenant);
  });

  afterEach(async () => {
    if (local.tenant.id) {
      await repo.tenantRepo.deleteTenant(local.tenant.id);
    }
    if (local.tenant2.id) {
      await repo.tenantRepo.deleteTenant(local.tenant2.id);
    }
  });

  it('creates a tenant', async () => {
    const newTenant = getNewTenant();
    const tenant2 = await repo.tenantRepo.insertTenant(newTenant);
    local.tenant2 = tenant2;
    expect(tenant2.tenant).toBe(local.tenant2.tenant);
  });
});
