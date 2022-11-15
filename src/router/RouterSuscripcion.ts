import { Router } from "express";
import { validarUsuario } from "../middlewares/validarUsuario";

export class RouterSuscripciones {
    constructor(){}

    public static usar = () : Router => {
        const routerSuscripciones = Router();
        routerSuscripciones.put('/comp',[validarUsuario],/**handleSuscAsociarCompentencia */)
        routerSuscripciones.get( '/cuenta' ,[validarUsuario] , /**handleSuscGetInfoSusc */ );
        routerSuscripciones.post( '/',[validarUsuario], /**handleSuscCrearSuscripcion */ );
        
        return routerSuscripciones;
    }
}