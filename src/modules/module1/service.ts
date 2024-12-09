import { getModule1Data as getModule1DataModel } from './model';
import { Module1Data } from './interface';

export const getServiceData = async (): Promise<Module1Data[]> => {
    return await getModule1DataModel();
};
