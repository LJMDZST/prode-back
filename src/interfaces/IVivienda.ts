import { ITablaSimpleNro } from "./ITablaSimpleNro";
import { ITipoVivienda } from "./ITipoVivienda";

export interface IVivienda extends ITablaSimpleNro {
    oTipoVivienda : ITipoVivienda
}