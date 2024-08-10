import { AxiosInstance } from 'axios'
import { ISendDTO } from '../types/IMailService'

export async function send(
  params: ISendDTO.Params,
  axiosInstance: AxiosInstance
): Promise<ISendDTO.Result> {
  try {
    const response = await axiosInstance.post('/email/send-email', params)

    return {
      success: response.status === 200,
      message: 'Email enviado com sucesso',
    }
  } catch (error) {
    return {
      success: false,
      message: `Falha ao enviar email: ${(error as Error).message}`,
    }
  }
}
