import { NextFunction, request, response } from "express";
import validator from 'validator'
import { IUsuario } from "../interfaces/IUsuario";
export const validarCamposUsuario = async(req : typeof request , res : typeof response, next : NextFunction)=>{

    const {nom , pass } : IUsuario = req.body;

    if( (!validator.isLength(nom,{min:1})) || (!validator.isLength(pass,{min:6,max:6}) )){
        return res.status(403).json({
            ok : false,
            error : 'campos inválidos..'
        });
    }
     
    next();
}

