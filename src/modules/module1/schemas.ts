import { z } from 'zod';

export const createModule1Schema = z.object({
    name: z.string().min(1, 'Name is required'),
});
