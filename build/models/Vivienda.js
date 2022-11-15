"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vivienda = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const TipoVivienda_1 = require("./TipoVivienda");
let Vivienda = class Vivienda extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150))
], Vivienda.prototype, "nro", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150))
], Vivienda.prototype, "nroPiso", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => TipoVivienda_1.TipoVivienda),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Vivienda.prototype, "idTipoVivienda", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TipoVivienda_1.TipoVivienda)
], Vivienda.prototype, "oTipoVivienda", void 0);
Vivienda = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Vivienda' })
], Vivienda);
exports.Vivienda = Vivienda;
