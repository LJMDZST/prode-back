"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSuscSusc = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Suscripcion_1 = require("./Suscripcion");
const TipoSuscripcion_1 = require("./TipoSuscripcion");
let TSuscSusc = class TSuscSusc extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => Suscripcion_1.Suscripcion),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], TSuscSusc.prototype, "idSuscripcion", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => TipoSuscripcion_1.TipoSuscripcion),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], TSuscSusc.prototype, "idTipoSuscripcion", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TipoSuscripcion_1.TipoSuscripcion)
], TSuscSusc.prototype, "oTipoSuscripcion", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Suscripcion_1.Suscripcion)
], TSuscSusc.prototype, "oSuscripcion", void 0);
TSuscSusc = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'TSuscSusc' })
], TSuscSusc);
exports.TSuscSusc = TSuscSusc;
