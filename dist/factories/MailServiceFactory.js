"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailServiceFactory = void 0;
const MailService_1 = require("../MailService");
const axiosConfig_1 = require("../services/axiosConfig");
class MailServiceFactory {
    static create(secretKey) {
        const axiosConfigService = new axiosConfig_1.AxiosConfigService(secretKey);
        const axiosInstance = axiosConfigService.createAxiosInstance();
        return new MailService_1.MailService(axiosInstance);
    }
}
exports.MailServiceFactory = MailServiceFactory;
