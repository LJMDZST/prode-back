import { Request, Response } from "express";
import { IUsuario } from "../interfaces/IUsuario";
import { Usuario } from "../models/Usuario";

export const handleLoginUsuario = async(req : Request , res : Response)=>{
            
    try {
        
        const { nom, pass }:IUsuario = req.body;

        const token = await (await Usuario.findOne({where:{nom : nom , pass : pass }}))?.generarToken();
        
        res.status(200).json({
            ok : true,
            data : token ? token :null,
            error: token ? null : 'error al general el token'
        })


    } catch (error) {
        res.status(500).json({
            ok :false,
            error: 'internal server error'
        })
    }

}