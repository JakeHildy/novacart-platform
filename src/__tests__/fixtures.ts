import { faker } from '@faker-js/faker';
import slugify from 'slugify';

export const getNewTenant = () => {
  return {
    tenant: slugify(faker.company.name(), { lower: true })
  };
};

export const getNewAccount = () => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.phone.number(),
    countryCode: faker.location.countryCode()
  };
};
