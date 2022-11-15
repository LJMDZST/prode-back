import { Sequelize } from "sequelize-typescript";
import { Ciudad } from "../models/Ciudad";
import { Cliente } from "../models/Cliente";
import { CodArea } from "../models/CodArea";
import { CodPais } from "../models/CodPais";
import { CodPostal } from "../models/CodPostal";
import { Competencia } from "../models/Competencia";
import { DetallePrediccion } from "../models/DetallePrediccion";
import { DetalleSuscripcion} from "../models/DetalleSuscripcion";
import { Domicilio } from "../models/Domicilio";
import { Equipo } from "../models/Equipo";
import { Genero } from "../models/Genero";
import { Gol } from "../models/Gol";
import { Jugador } from "../models/Jugador";
import { Pago } from "../models/Pago";
import { Pais } from "../models/Pais";
import { Partido } from "../models/Partido";
import { Persona } from "../models/Persona";
import { Prediccion } from "../models/Prediccion";
import { Premio } from "../models/Premio";
import { Provincia } from "../models/Provincia";
import { SocioEstrategico } from "../models/SocioEstrategico";
import { Suscripcion } from "../models/Suscripcion";
import { TablaPrediccion } from "../models/TablaPrediccion";
import { Telefono } from "../models/Telefono";
import { TipoGol } from "../models/TipoGol";
import { TipoPremio } from "../models/TipoPremio";
import { TipoPremioUsuario } from "../models/TipoPremioUsuario";
import { TipoSuscripcion } from "../models/TipoSuscripcion";
import { TSuscSusc } from "../models/TipoSuscripcionSuscripcion";
import { TipoVivienda } from "../models/TipoVivienda";
import { Usuario } from "../models/Usuario";
import { Vivienda } from "../models/Vivienda";

// importar clases
export const db = new Sequelize({ 
    dialect : 'mariadb',
    database : process.env.DB_NAME || '',
    username: process.env.DB_USER || '',
    password : process.env.DB_PASS || '',
    host : process.env.DB_HOST || '',
    models : [
        // aca van los models importados
        Ciudad,
        Cliente,
        CodArea,
        CodPais,
        CodPostal,
        Competencia,
        DetallePrediccion,
        DetalleSuscripcion,
        Domicilio,
        Equipo,
        Genero,
        Gol,
        Jugador,
        Pago,
        Pais,
        Partido,
        Persona,
        Prediccion,
        Premio,
        Provincia,
        SocioEstrategico,
        Suscripcion,
        TablaPrediccion,
        Telefono,
        TipoGol,
        TipoPremio,
        TipoPremioUsuario,
        TipoSuscripcion,
        TSuscSusc,
        TipoVivienda,
        Usuario,
        Vivienda
    ]
})