import { validate } from '../../utils/validate';
import { createModule1Schema } from './schemas';

export const validateModule1Data = validate(createModule1Schema, 'Invalid data for Module1');
