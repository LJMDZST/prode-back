"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const CodArea_1 = require("./CodArea");
const CodPais_1 = require("./CodPais");
let Telefono = class Telefono extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Telefono.prototype, "nro", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => CodArea_1.CodArea),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Telefono.prototype, "idCodArea", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => CodPais_1.CodPais),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Telefono.prototype, "idCodPais", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => CodArea_1.CodArea)
], Telefono.prototype, "oCodArea", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => CodPais_1.CodPais)
], Telefono.prototype, "oCodPais", void 0);
Telefono = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Telefono' })
], Telefono);
exports.Telefono = Telefono;
