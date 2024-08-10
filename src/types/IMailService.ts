// src/types/IMailService.ts

export namespace IMailAddDTO {
  export type Params = {
    email: string
  }

  export type Result = {
    success: boolean
    message: string
  }
}

export namespace IMailRemoveDTO {
  export type Params = {
    email: string
  }

  export type Result = {
    success: boolean
    message: string
  }
}

export namespace IMailVerifyDTO {
  export type Params = {
    email: string
  }

  export type Result = {
    verified: boolean
    verificationDate: Date | null
    message: string
  }
}

export namespace IDomainAddDTO {
  export type Params = {
    domain: string
  }

  export type Result = {
    success: boolean
    message: string
  }
}

export namespace IDomainRemoveDTO {
  export type Params = {
    domain: string
  }

  export type Result = {
    success: boolean
    message: string
  }
}

export namespace IDomainVerifyDTO {
  export type Params = {
    domain: string
  }

  export type Result = {
    verified: boolean
    verificationDate: Date | null
    message: string
  }
}

export namespace IDomainCnameDTO {
  export type Params = {
    domain: string
  }

  export type Result = {
    cnameRecords: { type: string; value: string; name: string }[]
  }
}

export namespace ISendDTO {
  export type Params = {
    from: string
    to: string
    subject: string
    text: string
  }

  export type Result = {
    success: boolean
    message: string
  }
}

export interface IMailService {
  send(data: ISendDTO.Params): Promise<ISendDTO.Result>
  mailAdd(params: IMailAddDTO.Params): Promise<IMailAddDTO.Result>
  mailRemove(params: IMailRemoveDTO.Params): Promise<IMailRemoveDTO.Result>
  mailVerify(params: IMailVerifyDTO.Params): Promise<IMailVerifyDTO.Result>
  domainAdd(params: IDomainAddDTO.Params): Promise<IDomainAddDTO.Result>
  domainRemove(
    params: IDomainRemoveDTO.Params
  ): Promise<IDomainRemoveDTO.Result>
  domainVerify(
    params: IDomainVerifyDTO.Params
  ): Promise<IDomainVerifyDTO.Result>
  domainCname(params: IDomainCnameDTO.Params): Promise<IDomainCnameDTO.Result>
}
