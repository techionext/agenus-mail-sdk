// src/services/axiosConfig.ts

import axios, { AxiosInstance } from 'axios'
import { config } from '../config'

export class AxiosConfigService {
  private secretKey: string

  constructor(secretKey: string) {
    if (!secretKey) {
      throw new Error('A secret key is required to configure Axios')
    }
    this.secretKey = secretKey
  }

  public createAxiosInstance(): AxiosInstance {
    return axios.create({
      baseURL: config.baseUrl, // Substitua pela URL base da sua API
      headers: {
        [config.header]: this.secretKey,
      },
    })
  }
}
