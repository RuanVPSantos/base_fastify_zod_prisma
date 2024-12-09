import { fastify } from 'fastify';
import server from './server';

const app = fastify();

server(app);

app.listen({ port: 3003 }, (err, address) => {
    if (err) throw err;
    console.log(`Server running at ${address}`);
});
