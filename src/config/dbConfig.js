"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Usuario_1 = require("../models/Usuario");
// importar clases
exports.db = new sequelize_typescript_1.Sequelize({
    dialect: 'mariadb',
    database: process.env.DB_NAME || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || '',
    models: [
        // aca van los models importados
        Usuario_1.Usuario
    ]
});
