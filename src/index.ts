import Fastify from 'fastify';
import tenantRoute from './route/tenant/TenantRoute';

const server = Fastify({ logger: true });

server.register(tenantRoute);

server.listen(
  { port: Number(process.env.PORT), host: process.env.HOST },
  (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    server.log.info("Let's go!");
  }
);
