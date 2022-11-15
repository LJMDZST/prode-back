"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocioEstrategico = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Persona_1 = require("./Persona");
let SocioEstrategico = class SocioEstrategico extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => Persona_1.Persona),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], SocioEstrategico.prototype, "idPersona", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], SocioEstrategico.prototype, "nom", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY)
], SocioEstrategico.prototype, "fechaAlta", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Persona_1.Persona)
], SocioEstrategico.prototype, "oPersona", void 0);
SocioEstrategico = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'SocioEstrategico' })
], SocioEstrategico);
exports.SocioEstrategico = SocioEstrategico;
