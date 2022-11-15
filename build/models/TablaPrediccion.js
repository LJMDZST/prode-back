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
exports.TablaPrediccion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const DetallePrediccion_1 = require("./DetallePrediccion");
const Suscripcion_1 = require("./Suscripcion");
let TablaPrediccion = class TablaPrediccion extends sequelize_typescript_1.Model {
    mostrarListaPuntajePredicciones() {
        return __awaiter(this, void 0, void 0, function* () {
            const listaPrediccion = yield this.$get('listaDetallePrediccion');
            if (listaPrediccion) {
                return yield Promise.all(listaPrediccion.map((detallePrediccion) => __awaiter(this, void 0, void 0, function* () {
                    const ptosPredGral = yield detallePrediccion.calcularPuntosPrediccionGeneral();
                    const puntosPredResult = yield detallePrediccion.calcularPuntosPrediccionResultado();
                    if (ptosPredGral && puntosPredResult) {
                        return {
                            puntosPredGral: ptosPredGral,
                            puntosPredResultado: puntosPredResult
                        };
                    }
                    else {
                        console.log(`${ptosPredGral ? '' : `error al obtener puntos grales de prediccion ${detallePrediccion.idPrediccion}`}`);
                        console.log(`${puntosPredResult ? '' : `error al obtener puntos resultado de prediccion ${detallePrediccion.idPrediccion}`}`);
                        return {
                            puntosPredGral: 0,
                            puntosPredResultado: 0
                        };
                    }
                })));
            }
            else {
                console.log('error al obtener la lista de predicciones');
            }
        });
    }
    calcPuntajeTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            const listaPrediccion = yield this.$get('listaDetallePrediccion');
            let puntajeTotal = 0;
            if (listaPrediccion) {
                yield Promise.all(listaPrediccion.map((detallePrediccion) => __awaiter(this, void 0, void 0, function* () {
                    const puntajeGral = yield detallePrediccion.calcularPuntosPrediccionGeneral();
                    const puntajeResultado = yield detallePrediccion.calcularPuntosPrediccionResultado();
                    if (puntajeGral && puntajeResultado) {
                        puntajeTotal += puntajeGral + puntajeResultado;
                    }
                    else {
                        console.log(`${puntajeGral ? '' : `errror al obtener el puntaje gral de  prediccion :${detallePrediccion.id}`} `);
                        console.log(`${puntajeResultado ? '' : `errror al obtener el puntaje resultado de  prediccion :${detallePrediccion.id}`} `);
                    }
                })));
                return puntajeTotal;
            }
            else {
                console.log('error al obtener la lista de predicciones');
            }
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Suscripcion_1.Suscripcion),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], TablaPrediccion.prototype, "idSuscripcion", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => DetallePrediccion_1.DetallePrediccion)
], TablaPrediccion.prototype, "listaDetallePrediccion", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Suscripcion_1.Suscripcion)
], TablaPrediccion.prototype, "oSuscripcion", void 0);
TablaPrediccion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'TablaPrediccion' })
], TablaPrediccion);
exports.TablaPrediccion = TablaPrediccion;
