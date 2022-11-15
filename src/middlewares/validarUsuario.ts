import {NextFunction, Request, Response} from 'express';
import { leerToken } from '../helpers/leerToken';
import { leerTokenFromHeader } from '../helpers/leerTokenFromHeader';
import { Usuario } from '../models/Usuario';

export const validarUsuario = async( req : Request, resp : Response , next : NextFunction)=>{
    try {
        
        const token = leerTokenFromHeader(req);

        const dataUsr = token && await leerToken(token);

        if(dataUsr) {

            const usr = await Usuario.findByPk(dataUsr.id);
            if ( (usr !== null) && (usr.validarToken())  ) {
           
                next();
               
            }  else {
                resp.status(403).json({
                    ok : false,
                    error : 'No es un usuario registrado'
                })
            }
            
        } else {
            resp.status(403).json({
                ok : false,
                error : 'error al leer el token'
            })
        }
        
       
  


    } catch (error) {
        resp.status(500).json({
            ok : false,
            error : 'Internal Server Error'
        })
    }
}