import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { Type } from '@sinclair/typebox';
import { FastifyPluginAsync } from 'fastify';

const tenantRoute: FastifyPluginAsync = async function (fastify) {
  const instance = fastify.withTypeProvider<TypeBoxTypeProvider>();

  instance.get('/tenant', {}, async (req, rep) => {
    return 'jake was here';
  });
};

export default tenantRoute;
