import { AxiosInstance } from 'axios';
export declare class AxiosConfigService {
    private secretKey;
    constructor(secretKey: string);
    createAxiosInstance(): AxiosInstance;
}
