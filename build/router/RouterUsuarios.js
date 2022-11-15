"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterUsuarios = void 0;
const express_1 = require("express");
const handleLoginUsuario_1 = require("../controllers/handleLoginUsuario");
const handleUsuarioCrearCuenta_1 = require("../controllers/handleUsuarioCrearCuenta");
const handleUsuarioGetCuenta_1 = require("../controllers/handleUsuarioGetCuenta");
const validarCamposUsuario_1 = require("../middlewares/validarCamposUsuario");
const validarUsuario_1 = require("../middlewares/validarUsuario");
class RouterUsuarios {
    constructor() { }
}
exports.RouterUsuarios = RouterUsuarios;
RouterUsuarios.usar = () => {
    const routerUsuarios = (0, express_1.Router)();
    routerUsuarios.post('/login', [validarCamposUsuario_1.validarCamposUsuario], handleLoginUsuario_1.handleLoginUsuario);
    routerUsuarios.get('/cuenta', [validarUsuario_1.validarUsuario], handleUsuarioGetCuenta_1.handleUsuarioGetCuenta);
    routerUsuarios.post('/', [validarCamposUsuario_1.validarCamposUsuario], handleUsuarioCrearCuenta_1.handleUsuarioCrearCuenta);
    return routerUsuarios;
};
