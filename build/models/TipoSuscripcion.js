"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoSuscripcion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Pago_1 = require("./Pago");
const Suscripcion_1 = require("./Suscripcion");
const TipoPremio_1 = require("./TipoPremio");
const TipoSuscripcionSuscripcion_1 = require("./TipoSuscripcionSuscripcion");
let TipoSuscripcion = class TipoSuscripcion extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], TipoSuscripcion.prototype, "nom", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Pago_1.Pago),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], TipoSuscripcion.prototype, "idPago", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Pago_1.Pago)
], TipoSuscripcion.prototype, "oPago", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Suscripcion_1.Suscripcion, () => TipoSuscripcionSuscripcion_1.TSuscSusc)
], TipoSuscripcion.prototype, "listaSuscripcion", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => TipoPremio_1.TipoPremio)
], TipoSuscripcion.prototype, "listaTiposPremio", void 0);
TipoSuscripcion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'TipoSuscripcion' })
], TipoSuscripcion);
exports.TipoSuscripcion = TipoSuscripcion;
