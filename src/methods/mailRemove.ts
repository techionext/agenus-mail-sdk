import { AxiosInstance } from 'axios'
import { IMailRemoveDTO } from '../types/IMailService'

export async function mailRemove(
  params: IMailRemoveDTO.Params,
  axiosInstance: AxiosInstance
): Promise<IMailRemoveDTO.Result> {
  try {
    const response = await axiosInstance.delete(`/email/${params.email}`)

    return {
      success: response.status === 200,
      message: 'Email removido com sucesso',
    }
  } catch (error) {
    return {
      success: false,
      message: `Falha ao remove email: ${(error as Error).message}`,
    }
  }
}
