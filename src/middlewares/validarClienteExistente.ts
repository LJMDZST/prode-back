import { NextFunction, request, response } from "express";

import { Persona } from "../models/Persona";



export const validarClienteExistente = async(req : typeof request , res : typeof response, next : NextFunction)=>{

    const {oCliente } = req.body;

    if( await Persona.findOne({where: { email : oCliente.email}}) ){
        return res.status(403).json({
            ok : false,
            error : 'ya existe un cliente con ese correo..'
        });
    }
     
    next();
}

