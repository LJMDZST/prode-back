import { ICiudad } from "./ICiudad";
import { ICodPostal } from "./ICodPostal";
import { IPais } from "./IPais";
import { IProvincia } from "./IProvincia";
import { IVivienda } from "./IVivienda";

export interface IDomicilio {
    id : number,
    calle : string,
    barrio : string,
    oPais : IPais,
    oProvincia : IProvincia,
    oVivienda : IVivienda,
    oCiudad : ICiudad,
    oCodPostal : ICodPostal
}