"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerToken = exports.leerTokenFromHeader = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const leerTokenFromHeader = (req) => (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
    ? req.headers.authorization.split(' ')[1]
    : undefined;
exports.leerTokenFromHeader = leerTokenFromHeader;
const leerToken = (token) => jsonwebtoken_1.default.verify(token, 'misemilla');
exports.leerToken = leerToken;
