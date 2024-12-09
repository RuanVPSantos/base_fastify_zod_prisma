import { FastifyInstance } from 'fastify';
import module1Router from './modules/module1/router';

export default function server(app: FastifyInstance) {
    app.register(module1Router, { prefix: '/module1' });
}
