import { MailService } from '../MailService'
import { AxiosConfigService } from '../services/axiosConfig'

export class MailServiceFactory {
  static create(secretKey: string): MailService {
    const axiosConfigService = new AxiosConfigService(secretKey)
    const axiosInstance = axiosConfigService.createAxiosInstance()
    return new MailService(axiosInstance)
  }
}
