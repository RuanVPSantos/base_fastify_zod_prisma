import { PrismaClient } from '@prisma/client';

let prismaPrincipal: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
    if (!prismaPrincipal) {
        prismaPrincipal = new PrismaClient();
    }
    return prismaPrincipal;
}

export default getPrisma;