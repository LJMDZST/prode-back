import { IPersona } from "./IPersona";

export interface ICliente extends IPersona{
    
    nom : string,
    ape : string,
    fechaNac : Date,
    id ?: number
}