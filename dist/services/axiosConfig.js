"use strict";
// src/services/axiosConfig.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosConfigService = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class AxiosConfigService {
    constructor(secretKey) {
        if (!secretKey) {
            throw new Error('A secret key is required to configure Axios');
        }
        this.secretKey = secretKey;
    }
    createAxiosInstance() {
        return axios_1.default.create({
            baseURL: config_1.config.baseUrl, // Substitua pela URL base da sua API
            headers: {
                [config_1.config.header]: this.secretKey,
            },
        });
    }
}
exports.AxiosConfigService = AxiosConfigService;
