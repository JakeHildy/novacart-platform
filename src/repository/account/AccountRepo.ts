import { PrismaClient, Account } from '@prisma/client';

export default class AccountRepo {
  constructor(private readonly client: PrismaClient) {}

  async selectAccount(id: string) {
    return await this.client.account.findUnique({
      where: { id }
    });
  }

  async insertAccount(newAccountData: Account) {
    return await this.client.account.create({
      data: newAccountData
    });
  }

  async updateAccount(id: string, params: Partial<Account>) {
    return await this.client.account.update({
      where: { id },
      data: params
    });
  }

  async deleteAccount(id: string) {
    return await this.client.account.delete({
      where: { id }
    });
  }

  async listAllAccounts() {
    return await this.client.account.findMany();
  }

  async deleteAllAccounts() {
    return await this.client.account.deleteMany({});
  }
}
