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
exports.handleUsuarioCrearCuenta = void 0;
const Cliente_1 = require("../models/Cliente");
const Usuario_1 = require("../models/Usuario");
const handleUsuarioCrearCuenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nom, pass } = req.body;
        const token = yield (yield Usuario_1.Usuario.create({ nom, pass })).generarToken();
        const cliente = yield Cliente_1.Cliente.create({
            nom: 'leandro',
            ape: 'mendoza',
            email: 'ljmdzst@gmail.com',
            fechaNac: new Date('1992-04-04'),
            id: 0
        });
        res.status(200).json({
            ok: token !== '',
            data: {
                token: token,
                oCLiente: cliente
            },
            error: token ? null : 'error al crear el usuario'
        });
    }
    catch (error) {
        res.json({
            ok: false,
            error
        });
    }
});
exports.handleUsuarioCrearCuenta = handleUsuarioCrearCuenta;
