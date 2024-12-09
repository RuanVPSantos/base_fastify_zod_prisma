import { FastifyRequest, FastifyReply } from 'fastify';
import { ZodError, ZodSchema } from 'zod';

export const validate = (schema: ZodSchema, errorMessage: string) => {
    return async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            schema.parse(request.body);
        } catch (error: unknown) {
            if (error instanceof ZodError) {
                reply.status(400).send({ message: errorMessage, errors: error.errors });
            } else {
                reply.status(500).send({ message: 'Internal server error' });
            }
        }
    };
};

