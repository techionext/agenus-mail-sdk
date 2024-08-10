export declare namespace IMailAddDTO {
    type Params = {
        email: string;
    };
    type Result = {
        success: boolean;
        message: string;
    };
}
export declare namespace IMailRemoveDTO {
    type Params = {
        email: string;
    };
    type Result = {
        success: boolean;
        message: string;
    };
}
export declare namespace IMailVerifyDTO {
    type Params = {
        email: string;
    };
    type Result = {
        verified: boolean;
        verificationDate: Date | null;
        message: string;
    };
}
export declare namespace IDomainAddDTO {
    type Params = {
        domain: string;
    };
    type Result = {
        success: boolean;
        message: string;
    };
}
export declare namespace IDomainRemoveDTO {
    type Params = {
        domain: string;
    };
    type Result = {
        success: boolean;
        message: string;
    };
}
export declare namespace IDomainVerifyDTO {
    type Params = {
        domain: string;
    };
    type Result = {
        verified: boolean;
        verificationDate: Date | null;
        message: string;
    };
}
export declare namespace IDomainCnameDTO {
    type Params = {
        domain: string;
    };
    type Result = {
        cnameRecords: {
            type: string;
            value: string;
            name: string;
        }[];
    };
}
export declare namespace ISendDTO {
    type Params = {
        from: string;
        to: string;
        subject: string;
        text: string;
    };
    type Result = {
        success: boolean;
        message: string;
    };
}
export interface IMailService {
    send(data: ISendDTO.Params): Promise<ISendDTO.Result>;
    mailAdd(params: IMailAddDTO.Params): Promise<IMailAddDTO.Result>;
    mailRemove(params: IMailRemoveDTO.Params): Promise<IMailRemoveDTO.Result>;
    mailVerify(params: IMailVerifyDTO.Params): Promise<IMailVerifyDTO.Result>;
    domainAdd(params: IDomainAddDTO.Params): Promise<IDomainAddDTO.Result>;
    domainRemove(params: IDomainRemoveDTO.Params): Promise<IDomainRemoveDTO.Result>;
    domainVerify(params: IDomainVerifyDTO.Params): Promise<IDomainVerifyDTO.Result>;
    domainCname(params: IDomainCnameDTO.Params): Promise<IDomainCnameDTO.Result>;
}
