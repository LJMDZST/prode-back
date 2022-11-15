import { request, response } from "express"
import { ICliente } from "../interfaces/ICliente";
import { IUsuario } from "../interfaces/IUsuario";
import { Cliente } from "../models/Cliente";


export const handleClienteCrearCuenta = async(req : typeof request , res : typeof response)=>{
    try {
        
        const {oUsuario , oCliente} : {oUsuario : IUsuario, oCliente : ICliente} = req.body;
       
        const cliente = await Cliente.crearCliente( {...oCliente } );

        let token : string | undefined = undefined;

        if(cliente) {
            token =  await( await cliente.crearUsuario( {...oUsuario} ) )?.generarToken() ;
        }

        

        res.status(200).json({
            ok : token !== '',
            data : token 
            ?   {
                    token : token,
                    oCliente : {
                        ...cliente?.get(),
                        oPersona : cliente?.oPersona.get()
                    }
                } 
            : null,
            error : token ? null : 'error al crear el usuario'
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            error 
        })
    }
}
