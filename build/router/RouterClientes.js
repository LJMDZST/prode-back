"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterClientes = void 0;
const express_1 = require("express");
const handleUsuarioLogin_1 = require("../controllers/handleUsuarioLogin");
const handleClienteCrearCuenta_1 = require("../controllers/handleClienteCrearCuenta");
const handleClienteGetCuenta_1 = require("../controllers/handleClienteGetCuenta");
const validarCamposUsuario_1 = require("../middlewares/validarCamposUsuario");
const validarUsuario_1 = require("../middlewares/validarUsuario");
const validarClienteExistente_1 = require("../middlewares/validarClienteExistente");
class RouterClientes {
    constructor() { }
}
exports.RouterClientes = RouterClientes;
RouterClientes.usar = () => {
    const routerClientes = (0, express_1.Router)();
    routerClientes.post('/login', [validarCamposUsuario_1.validarCamposUsuario], handleUsuarioLogin_1.handleLoginUsuario);
    routerClientes.get('/cuenta', [validarUsuario_1.validarUsuario], handleClienteGetCuenta_1.handleClienteGetCuenta);
    routerClientes.post('/', [validarClienteExistente_1.validarClienteExistente], handleClienteCrearCuenta_1.handleClienteCrearCuenta);
    return routerClientes;
};
