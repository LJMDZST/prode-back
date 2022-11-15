"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleSuscripcion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Competencia_1 = require("./Competencia");
const Suscripcion_1 = require("./Suscripcion");
let DetalleSuscripcion = class DetalleSuscripcion extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Suscripcion_1.Suscripcion),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DetalleSuscripcion.prototype, "idSuscripcion", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Competencia_1.Competencia),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DetalleSuscripcion.prototype, "idCompetencia", void 0);
DetalleSuscripcion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'DetalleSuscripcion' })
], DetalleSuscripcion);
exports.DetalleSuscripcion = DetalleSuscripcion;
