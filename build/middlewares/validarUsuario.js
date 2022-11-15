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
exports.validarUsuario = void 0;
const leerTokenFromHeader_1 = require("../helpers/leerTokenFromHeader");
const Usuario_1 = require("../models/Usuario");
const validarUsuario = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = (0, leerTokenFromHeader_1.leerTokenFromHeader)(req);
        const usr = yield Usuario_1.Usuario.findOne({ where: { token: token } });
        if ((usr !== null) && (usr.validarToken())) {
            next();
        }
        else {
            resp.status(403).json({
                ok: false,
                error: 'No es un usuario registrado'
            });
        }
    }
    catch (error) {
        resp.status(500).json({
            ok: false,
            error: 'Internal Server Error'
        });
    }
});
exports.validarUsuario = validarUsuario;
