import { request } from "express";

export const leerTokenFromHeader = (req : typeof request)=>
     (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer' )
        ?  req.headers.authorization.split(' ')[1]
        :  undefined;

