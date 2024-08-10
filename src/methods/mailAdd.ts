import { AxiosInstance } from 'axios'
import { IMailAddDTO } from '../types/IMailService'

export async function mailAdd(
  params: IMailAddDTO.Params,
  axiosInstance: AxiosInstance
): Promise<IMailAddDTO.Result> {
  const response = await axiosInstance.post('/email', params)

  return {
    success: response.status === 200,
    message: 'Email adicionado com sucesso',
  }
}
