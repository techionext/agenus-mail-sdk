"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const domainAdd_1 = require("./methods/domainAdd");
const domainCname_1 = require("./methods/domainCname");
const domainRemove_1 = require("./methods/domainRemove");
const domainVerify_1 = require("./methods/domainVerify");
const mailAdd_1 = require("./methods/mailAdd");
const mailRemove_1 = require("./methods/mailRemove");
const mailVerify_1 = require("./methods/mailVerify");
const send_1 = require("./methods/send");
class MailService {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    send(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, send_1.send)(params, this.axiosInstance);
        });
    }
    mailAdd(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, mailAdd_1.mailAdd)(params, this.axiosInstance);
        });
    }
    mailRemove(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, mailRemove_1.mailRemove)(params, this.axiosInstance);
        });
    }
    mailVerify(params) {
        return (0, mailVerify_1.mailVerify)(params, this.axiosInstance);
    }
    domainAdd(params) {
        return (0, domainAdd_1.domainAdd)(params, this.axiosInstance);
    }
    domainRemove(params) {
        return (0, domainRemove_1.domainRemove)(params, this.axiosInstance);
    }
    domainVerify(params) {
        return (0, domainVerify_1.domainVerify)(params, this.axiosInstance);
    }
    domainCname(params) {
        return (0, domainCname_1.domainCname)(params, this.axiosInstance);
    }
}
exports.MailService = MailService;
