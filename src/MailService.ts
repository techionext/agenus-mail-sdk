import { domainAdd } from './methods/domainAdd'
import { domainCname } from './methods/domainCname'
import { domainRemove } from './methods/domainRemove'
import { domainVerify } from './methods/domainVerify'
import { mailAdd } from './methods/mailAdd'
import { mailRemove } from './methods/mailRemove'
import { mailVerify } from './methods/mailVerify'
import { send } from './methods/send'
import {
  IDomainAddDTO,
  IDomainCnameDTO,
  IDomainRemoveDTO,
  IDomainVerifyDTO,
  IMailAddDTO,
  IMailRemoveDTO,
  IMailService,
  IMailVerifyDTO,
  ISendDTO,
} from './types/IMailService'

import { AxiosInstance } from 'axios'

export class MailService implements IMailService {
  private axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }
  async send(params: ISendDTO.Params): Promise<ISendDTO.Result> {
    return send(params, this.axiosInstance)
  }
  async mailAdd(params: IMailAddDTO.Params): Promise<IMailAddDTO.Result> {
    return mailAdd(params, this.axiosInstance)
  }
  async mailRemove(params: IMailRemoveDTO.Params): Promise<IMailAddDTO.Result> {
    return mailRemove(params, this.axiosInstance)
  }
  mailVerify(params: IMailVerifyDTO.Params): Promise<IMailVerifyDTO.Result> {
    return mailVerify(params, this.axiosInstance)
  }
  domainAdd(params: IDomainAddDTO.Params): Promise<IDomainAddDTO.Result> {
    return domainAdd(params, this.axiosInstance)
  }
  domainRemove(
    params: IDomainRemoveDTO.Params
  ): Promise<IDomainRemoveDTO.Result> {
    return domainRemove(params, this.axiosInstance)
  }
  domainVerify(
    params: IDomainVerifyDTO.Params
  ): Promise<IDomainVerifyDTO.Result> {
    return domainVerify(params, this.axiosInstance)
  }
  domainCname(params: IDomainCnameDTO.Params): Promise<IDomainCnameDTO.Result> {
    return domainCname(params, this.axiosInstance)
  }
}
