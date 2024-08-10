import { AxiosInstance } from 'axios'
import { IDomainCnameDTO, IDomainVerifyDTO } from '../types/IMailService'

export async function domainCname(
  params: IDomainCnameDTO.Params,
  axiosInstance: AxiosInstance
): Promise<IDomainCnameDTO.Result> {
  try {
    const response = await axiosInstance.get(`/domain/cname`)

    return {
      cnameRecords: [],
    }
  } catch (error) {
    return {
      cnameRecords: [],
    }
  }
}
