import { AxiosInstance } from 'axios'
import {
  IDomainAddDTO,
  IDomainCnameDTO,
  IDomainRemoveDTO,
  IDomainVerifyDTO,
  IMailAddDTO,
  IMailRemoveDTO,
  IMailVerifyDTO,
  ISendDTO,
} from './types/IMailService'

/**
 * Interface para o serviço de email.
 */
export interface IMailService {
  /**
   * Envia um email.
   * @param params - Parâmetros para enviar o email.
   * @returns Um objeto com o status e a mensagem do envio.
   * @example
   * const response = await mailService.send({
   *   userId: '123',
   *   from: 'Your Name <yourname@example.com>',
   *   to: 'recipient@example.com',
   *   subject: 'Teste de Email',
   *   text: 'Este é um email de teste',
   * });
   * console.log(response.message);
   */
  send(params: ISendDTO.Params): Promise<ISendDTO.Result>

  /**
   * Adiciona um email.
   * @param params - Parâmetros para adicionar o email.
   * @returns Um objeto com o status e a mensagem da operação.
   */
  mailAdd(params: IMailAddDTO.Params): Promise<IMailAddDTO.Result>

  /**
   * Remove um email.
   * @param params - Parâmetros para remover o email.
   * @returns Um objeto com o status e a mensagem da operação.
   */
  mailRemove(params: IMailRemoveDTO.Params): Promise<IMailRemoveDTO.Result>

  /**
   * Verifica um email.
   * @param params - Parâmetros para verificar o email.
   * @returns Um objeto com o status de verificação e a data da verificação.
   */
  mailVerify(params: IMailVerifyDTO.Params): Promise<IMailVerifyDTO.Result>

  /**
   * Adiciona um domínio.
   * @param params - Parâmetros para adicionar o domínio.
   * @returns Um objeto com o status e a mensagem da operação.
   */
  domainAdd(params: IDomainAddDTO.Params): Promise<IDomainAddDTO.Result>

  /**
   * Remove um domínio.
   * @param params - Parâmetros para remover o domínio.
   * @returns Um objeto com o status e a mensagem da operação.
   */
  domainRemove(
    params: IDomainRemoveDTO.Params
  ): Promise<IDomainRemoveDTO.Result>

  /**
   * Verifica um domínio.
   * @param params - Parâmetros para verificar o domínio.
   * @returns Um objeto com o status de verificação e a data da verificação.
   */
  domainVerify(
    params: IDomainVerifyDTO.Params
  ): Promise<IDomainVerifyDTO.Result>

  /**
   * Obtém os registros CNAME de um domínio.
   * @param params - Parâmetros para obter os registros CNAME.
   * @returns Um objeto com os registros CNAME do domínio.
   */
  domainCname(params: IDomainCnameDTO.Params): Promise<IDomainCnameDTO.Result>
}

/**
 * Classe que implementa o serviço de email.
 */
export class MailService implements IMailService {
  /**
   * Cria uma instância de MailService.
   * @param axiosInstance - Instância configurada do Axios para realizar as requisições.
   */
  constructor(axiosInstance: AxiosInstance)

  send(params: ISendDTO.Params): Promise<ISendDTO.Result>
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

/**
 * Classe de fábrica para criar instâncias de MailService.
 */
export class MailServiceFactory {
  /**
   * Cria uma instância de MailService configurada com a secret key.
   * @param secretKey - A chave secreta usada para autenticar as requisições.
   * @returns Uma instância configurada de MailService.
   */
  static create(secretKey: string): MailService
}
