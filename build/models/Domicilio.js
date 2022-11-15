"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Domicilio_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domicilio = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Ciudad_1 = require("./Ciudad");
const CodPostal_1 = require("./CodPostal");
const Pais_1 = require("./Pais");
const Provincia_1 = require("./Provincia");
const TipoVivienda_1 = require("./TipoVivienda");
const Vivienda_1 = require("./Vivienda");
let Domicilio = Domicilio_1 = class Domicilio extends sequelize_typescript_1.Model {
    static crearDomicilio(dataDom) {
        return __awaiter(this, void 0, void 0, function* () {
            const { oPais, oCiudad, oProvincia, oVivienda, oCodPostal, calle, barrio } = dataDom;
            const pais = yield Pais_1.Pais.create(Object.assign({}, oPais));
            const ciudad = yield Ciudad_1.Ciudad.create(Object.assign({}, oCiudad));
            const provincia = yield Provincia_1.Provincia.create(Object.assign({}, oProvincia));
            const vivienda = yield Vivienda_1.Vivienda.create(Object.assign({}, oVivienda), { include: { model: TipoVivienda_1.TipoVivienda } });
            const codPostal = yield CodPostal_1.CodPostal.create(Object.assign({}, oCodPostal));
            if (pais && ciudad && provincia && vivienda && codPostal) {
                const oDomicilio = yield Domicilio_1.create({ calle, barrio });
                yield oDomicilio.$set('oPais', pais);
                yield oDomicilio.$set('oCiudad', ciudad);
                yield oDomicilio.$set('oVivienda', vivienda);
                yield oDomicilio.$set('oCodPostal', codPostal);
                yield oDomicilio.$set('oProv', provincia);
                return oDomicilio;
            }
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150))
], Domicilio.prototype, "calle", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150))
], Domicilio.prototype, "barrio", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => CodPostal_1.CodPostal),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Domicilio.prototype, "idCodPostal", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Pais_1.Pais),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Domicilio.prototype, "idPais", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Provincia_1.Provincia),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Domicilio.prototype, "idProvincia", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Ciudad_1.Ciudad),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Domicilio.prototype, "idCiudad", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Vivienda_1.Vivienda),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Domicilio.prototype, "idVivienda", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => CodPostal_1.CodPostal)
], Domicilio.prototype, "oCodPostal", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Pais_1.Pais)
], Domicilio.prototype, "oPais", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Provincia_1.Provincia)
], Domicilio.prototype, "oProv", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Ciudad_1.Ciudad)
], Domicilio.prototype, "oCiudad", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Vivienda_1.Vivienda)
], Domicilio.prototype, "oVivienda", void 0);
Domicilio = Domicilio_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Domicilio' })
], Domicilio);
exports.Domicilio = Domicilio;
