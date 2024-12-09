import { FastifyInstance } from 'fastify';
import { getModule1Data } from './controller';
import { validateModule1Data } from './middleware';

export default async function module1Router(app: FastifyInstance) {
    app.get('/', getModule1Data);
    app.post('/', { preHandler: validateModule1Data }, getModule1Data);
}
