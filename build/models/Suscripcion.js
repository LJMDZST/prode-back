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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suscripcion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Competencia_1 = require("./Competencia");
const TablaPrediccion_1 = require("./TablaPrediccion");
const TipoSuscripcion_1 = require("./TipoSuscripcion");
const TipoSuscripcionSuscripcion_1 = require("./TipoSuscripcionSuscripcion");
const Usuario_1 = require("./Usuario");
let Suscripcion = class Suscripcion extends sequelize_typescript_1.Model {
    mostrarTablaPrediccion() {
        return __awaiter(this, void 0, void 0, function* () {
            const oTablaPrediccion = yield TablaPrediccion_1.TablaPrediccion.findOne({ where: { idSuscripcion: this.id } });
            if (oTablaPrediccion) {
                return yield oTablaPrediccion.mostrarListaPuntajePredicciones();
            }
            else {
                console.log(`error al obtener la tabla de predicciones de suscripcion :${this.id} de usuario ${this.idUsuario}`);
            }
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY)
], Suscripcion.prototype, "fecha", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Usuario_1.Usuario),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Suscripcion.prototype, "idUsuario", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Usuario_1.Usuario)
], Suscripcion.prototype, "oUsuario", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => TipoSuscripcion_1.TipoSuscripcion, () => TipoSuscripcionSuscripcion_1.TSuscSusc)
], Suscripcion.prototype, "listaTipoSuscripcion", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Competencia_1.Competencia)
], Suscripcion.prototype, "listaCompetencias", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => TablaPrediccion_1.TablaPrediccion)
], Suscripcion.prototype, "oTablaPrediccion", void 0);
Suscripcion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Suscripcion' })
], Suscripcion);
exports.Suscripcion = Suscripcion;
