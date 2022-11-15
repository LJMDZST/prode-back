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
exports.handleUsuarioGetCuenta = void 0;
const leerTokenFromHeader_1 = require("../helpers/leerTokenFromHeader");
const Usuario_1 = require("../models/Usuario");
const handleUsuarioGetCuenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = (0, leerTokenFromHeader_1.leerTokenFromHeader)(req);
        const dataToken = token && (0, leerTokenFromHeader_1.leerToken)(token);
        const oUsuario = dataToken &&
            (yield Usuario_1.Usuario.findOne({ where: { nom: dataToken.nom, pass: dataToken.pass } }));
        res.status(200).json({
            ok: true,
            data: oUsuario ? Object.assign({}, oUsuario.get()) : null,
            error: null
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            error: 'internal server error'
        });
    }
});
exports.handleUsuarioGetCuenta = handleUsuarioGetCuenta;
