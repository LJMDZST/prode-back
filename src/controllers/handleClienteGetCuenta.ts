import { Request, Response } from "express";
import { leerToken, leerTokenFromHeader } from "../helpers/leerTokenFromHeader";
import { Cliente } from "../models/Cliente";
import { Usuario } from "../models/Usuario";

export const handleClienteGetCuenta = async(req : Request , res : Response)=>{
            
    try {
        
        const token = leerTokenFromHeader(req);
        const dataToken = token && leerToken(token);

        const oUsuario = dataToken &&
            await Usuario.findOne({where:{nom : dataToken.nom , pass : dataToken.pass}});

    
        const oCliente = oUsuario && await oUsuario.$get('oCliente');
       
        
        res.status(200).json({
            ok : true,
            data : oUsuario && oCliente ? {
                oUsuario : oUsuario.get(),
                oCliente : oCliente.get()
            }:null,
            error: null
        })


    } catch (error) {
        res.status(500).json({
            ok :false,
            error: 'internal server error'
        })
    }

}