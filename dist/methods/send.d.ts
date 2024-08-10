import { AxiosInstance } from 'axios';
import { ISendDTO } from '../types/IMailService';
export declare function send(params: ISendDTO.Params, axiosInstance: AxiosInstance): Promise<ISendDTO.Result>;
