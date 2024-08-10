import { AxiosInstance } from 'axios'
import { IDomainVerifyDTO } from '../types/IMailService'

export async function domainVerify(
  params: IDomainVerifyDTO.Params,
  axiosInstance: AxiosInstance
): Promise<IDomainVerifyDTO.Result> {
  try {
    const response = await axiosInstance.get(`/domain/verify`)

    return {
      verified: true,
      verificationDate: new Date(),
      message: 'Dominio verificado com sucesso',
    }
  } catch (error) {
    return {
      verified: false,
      verificationDate: null,
      message: `Falha ao remove email: ${(error as Error).message}`,
    }
  }
}
