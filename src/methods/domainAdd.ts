import { AxiosInstance } from 'axios'
import { IDomainAddDTO } from '../types/IMailService'

export async function domainAdd(
  params: IDomainAddDTO.Params,
  axiosInstance: AxiosInstance
): Promise<IDomainAddDTO.Result> {
  const response = await axiosInstance.post('/domain', params)

  return {
    success: response.status === 200,
    message: 'Email adicionado com sucesso',
  }
}
