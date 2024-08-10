import { IDomainAddDTO, IDomainCnameDTO, IDomainRemoveDTO, IDomainVerifyDTO, IMailAddDTO, IMailRemoveDTO, IMailService, IMailVerifyDTO, ISendDTO } from './types/IMailService';
import { AxiosInstance } from 'axios';
export declare class MailService implements IMailService {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    send(params: ISendDTO.Params): Promise<ISendDTO.Result>;
    mailAdd(params: IMailAddDTO.Params): Promise<IMailAddDTO.Result>;
    mailRemove(params: IMailRemoveDTO.Params): Promise<IMailAddDTO.Result>;
    mailVerify(params: IMailVerifyDTO.Params): Promise<IMailVerifyDTO.Result>;
    domainAdd(params: IDomainAddDTO.Params): Promise<IDomainAddDTO.Result>;
    domainRemove(params: IDomainRemoveDTO.Params): Promise<IDomainRemoveDTO.Result>;
    domainVerify(params: IDomainVerifyDTO.Params): Promise<IDomainVerifyDTO.Result>;
    domainCname(params: IDomainCnameDTO.Params): Promise<IDomainCnameDTO.Result>;
}
