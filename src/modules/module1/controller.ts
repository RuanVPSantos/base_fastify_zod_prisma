import { FastifyReply, FastifyRequest } from 'fastify';
import { getServiceData } from './service';

export const getModule1Data = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const data = await getServiceData();
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send({ message: 'Error fetching data' });
    }
};
