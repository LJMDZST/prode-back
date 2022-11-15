"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Ciudad_1 = require("../models/Ciudad");
const Cliente_1 = require("../models/Cliente");
const CodArea_1 = require("../models/CodArea");
const CodPais_1 = require("../models/CodPais");
const CodPostal_1 = require("../models/CodPostal");
const Competencia_1 = require("../models/Competencia");
const DetallePrediccion_1 = require("../models/DetallePrediccion");
const DetalleSuscripcion_1 = require("../models/DetalleSuscripcion");
const Domicilio_1 = require("../models/Domicilio");
const Equipo_1 = require("../models/Equipo");
const Genero_1 = require("../models/Genero");
const Gol_1 = require("../models/Gol");
const Jugador_1 = require("../models/Jugador");
const Pago_1 = require("../models/Pago");
const Pais_1 = require("../models/Pais");
const Partido_1 = require("../models/Partido");
const Persona_1 = require("../models/Persona");
const Prediccion_1 = require("../models/Prediccion");
const Premio_1 = require("../models/Premio");
const Provincia_1 = require("../models/Provincia");
const SocioEstrategico_1 = require("../models/SocioEstrategico");
const Suscripcion_1 = require("../models/Suscripcion");
const TablaPrediccion_1 = require("../models/TablaPrediccion");
const Telefono_1 = require("../models/Telefono");
const TipoGol_1 = require("../models/TipoGol");
const TipoPremio_1 = require("../models/TipoPremio");
const TipoPremioUsuario_1 = require("../models/TipoPremioUsuario");
const TipoSuscripcion_1 = require("../models/TipoSuscripcion");
const TipoSuscripcionSuscripcion_1 = require("../models/TipoSuscripcionSuscripcion");
const TipoVivienda_1 = require("../models/TipoVivienda");
const Usuario_1 = require("../models/Usuario");
const Vivienda_1 = require("../models/Vivienda");
// importar clases
exports.db = new sequelize_typescript_1.Sequelize({
    dialect: 'mariadb',
    database: process.env.DB_NAME || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || '',
    models: [
        // aca van los models importados
        Ciudad_1.Ciudad,
        Cliente_1.Cliente,
        CodArea_1.CodArea,
        CodPais_1.CodPais,
        CodPostal_1.CodPostal,
        Competencia_1.Competencia,
        DetallePrediccion_1.DetallePrediccion,
        DetalleSuscripcion_1.DetalleSuscripcion,
        Domicilio_1.Domicilio,
        Equipo_1.Equipo,
        Genero_1.Genero,
        Gol_1.Gol,
        Jugador_1.Jugador,
        Pago_1.Pago,
        Pais_1.Pais,
        Partido_1.Partido,
        Persona_1.Persona,
        Prediccion_1.Prediccion,
        Premio_1.Premio,
        Provincia_1.Provincia,
        SocioEstrategico_1.SocioEstrategico,
        Suscripcion_1.Suscripcion,
        TablaPrediccion_1.TablaPrediccion,
        Telefono_1.Telefono,
        TipoGol_1.TipoGol,
        TipoPremio_1.TipoPremio,
        TipoPremioUsuario_1.TipoPremioUsuario,
        TipoSuscripcion_1.TipoSuscripcion,
        TipoSuscripcionSuscripcion_1.TSuscSusc,
        TipoVivienda_1.TipoVivienda,
        Usuario_1.Usuario,
        Vivienda_1.Vivienda
    ]
});
