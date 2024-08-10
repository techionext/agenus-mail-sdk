import { AxiosInstance } from 'axios'
import { IMailVerifyDTO } from '../types/IMailService'

export async function mailVerify(
  params: IMailVerifyDTO.Params,
  axiosInstance: AxiosInstance
): Promise<IMailVerifyDTO.Result> {
  try {
    const response = await axiosInstance.get(`/email/verify`)

    return {
      verified: true,
      verificationDate: new Date(),
      message: 'Email removido com sucesso',
    }
  } catch (error) {
    return {
      verified: false,
      verificationDate: null,
      message: `Falha ao remove email: ${(error as Error).message}`,
    }
  }
}
