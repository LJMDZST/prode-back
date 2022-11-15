import { Router } from "express";
import { handleLoginUsuario } from "../controllers/handleUsuarioLogin";
import { handleClienteCrearCuenta } from "../controllers/handleClienteCrearCuenta";
import { handleClienteGetCuenta } from "../controllers/handleClienteGetCuenta";
import { validarCamposUsuario } from "../middlewares/validarCamposUsuario";
import { validarUsuario } from "../middlewares/validarUsuario";
import { validarClienteExistente } from "../middlewares/validarClienteExistente";

export class RouterClientes {
    constructor(){}

    public static usar = () : Router => {
        const routerClientes = Router();
        routerClientes.post('/login',[validarCamposUsuario],handleLoginUsuario)
        routerClientes.get( '/cuenta' ,[validarUsuario] , handleClienteGetCuenta );
        routerClientes.post( '/',[validarClienteExistente], handleClienteCrearCuenta );
        return routerClientes;
    }
}