import { IDomicilio } from "./IDomicilio"
import { IGenero } from "./IGenero"
import { ITelefono } from "./ITelefono"

export interface IPersona {
    email : string,
    oGenero : IGenero,
    oTelefono : ITelefono,
    oDomicilio : IDomicilio,

}