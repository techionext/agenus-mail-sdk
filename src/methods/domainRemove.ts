import { AxiosInstance } from 'axios'
import { IDomainRemoveDTO } from '../types/IMailService'

export async function domainRemove(
  params: IDomainRemoveDTO.Params,
  axiosInstance: AxiosInstance
): Promise<IDomainRemoveDTO.Result> {
  try {
    const response = await axiosInstance.delete(`/domain/${params.domain}`)

    return {
      success: response.status === 200,
      message: 'Dominio removido com sucesso',
    }
  } catch (error) {
    return {
      success: false,
      message: `Falha ao remove domain: ${(error as Error).message}`,
    }
  }
}
