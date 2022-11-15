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
exports.DetallePrediccion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Prediccion_1 = require("./Prediccion");
const TablaPrediccion_1 = require("./TablaPrediccion");
let DetallePrediccion = class DetallePrediccion extends sequelize_typescript_1.Model {
    calcularPuntosPrediccionResultado() {
        return __awaiter(this, void 0, void 0, function* () {
            const oPrediccion = yield Prediccion_1.Prediccion.findByPk(this.idPrediccion);
            if (oPrediccion) {
                const golesDelPartido = yield oPrediccion.mostrarGolesDelPartido();
                if (golesDelPartido) {
                    let puntosGanados = 0;
                    const { cantGolesEq1, cantGolesEq2 } = golesDelPartido;
                    const { g1, g2 } = oPrediccion;
                    if (g1 === cantGolesEq1 && g2 === cantGolesEq2)
                        puntosGanados += 1;
                    return puntosGanados;
                }
                else {
                    console.log('error al obtener info de la prediccion');
                }
            }
            else {
                console.log('error al obtener info de la prediccion');
            }
        });
    }
    calcularPuntosPrediccionGeneral() {
        return __awaiter(this, void 0, void 0, function* () {
            const oPrediccion = yield Prediccion_1.Prediccion.findByPk(this.idPrediccion);
            if (oPrediccion) {
                const golesDelPartido = yield oPrediccion.mostrarGolesDelPartido();
                if (golesDelPartido) {
                    let puntosGanados = 0;
                    const { cantGolesEq1, cantGolesEq2 } = golesDelPartido;
                    const { g1, g2 } = oPrediccion;
                    if (g1 > g2 && cantGolesEq1 > cantGolesEq2)
                        puntosGanados += 2;
                    if (g1 === g2 && cantGolesEq1 === cantGolesEq2)
                        puntosGanados += 2;
                    if (g1 < g2 && cantGolesEq1 < cantGolesEq2)
                        puntosGanados += 2;
                    return puntosGanados;
                }
                else {
                    console.log('error al obtener info de la prediccion');
                }
            }
            else {
                console.log('error al obtener info de la prediccion');
            }
        });
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => Prediccion_1.Prediccion),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DetallePrediccion.prototype, "idPrediccion", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => TablaPrediccion_1.TablaPrediccion),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], DetallePrediccion.prototype, "idTablaPrediccion", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TablaPrediccion_1.TablaPrediccion)
], DetallePrediccion.prototype, "oTablaPrediccion", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Prediccion_1.Prediccion)
], DetallePrediccion.prototype, "oPrediccion", void 0);
DetallePrediccion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'DetallePrediccion' })
], DetallePrediccion);
exports.DetallePrediccion = DetallePrediccion;
