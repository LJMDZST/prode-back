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
exports.Partido = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Competencia_1 = require("./Competencia");
const Equipo_1 = require("./Equipo");
const Gol_1 = require("./Gol");
let Partido = class Partido extends sequelize_typescript_1.Model {
    verCantGolesEq1() {
        return __awaiter(this, void 0, void 0, function* () {
            const oEq1 = yield this.$get('equipo1');
            if (oEq1) {
                const listaGolesTotales = yield Gol_1.Gol.findAll({ where: { idParido: this.id } });
                let totalGolesE1 = 0;
                yield Promise.all(listaGolesTotales.map((gol) => __awaiter(this, void 0, void 0, function* () {
                    if (oEq1.id === (yield gol.mostrarIdEquipoJugador())) {
                        totalGolesE1 = totalGolesE1 + 1;
                    }
                })));
                return totalGolesE1;
            }
            return 0;
        });
    }
    verCantGolesEq2() {
        return __awaiter(this, void 0, void 0, function* () {
            const oEq2 = yield this.$get('equipo2');
            if (oEq2) {
                const listaGolesTotales = yield Gol_1.Gol.findAll({ where: { idParido: this.id } });
                let totalGolesE2 = 0;
                yield Promise.all(listaGolesTotales.map((gol) => __awaiter(this, void 0, void 0, function* () {
                    if (oEq2.id === (yield gol.mostrarIdEquipoJugador())) {
                        totalGolesE2 = totalGolesE2 + 1;
                    }
                })));
                return totalGolesE2;
            }
            return 0;
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Competencia_1.Competencia),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Partido.prototype, "idCompetencia", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Equipo_1.Equipo),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Partido.prototype, "idEquipo1", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Equipo_1.Equipo),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Partido.prototype, "idEquipo2", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Equipo_1.Equipo, 'idEquipo1')
], Partido.prototype, "equipo1", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Equipo_1.Equipo, 'idEquipo2')
], Partido.prototype, "equipo2", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Competencia_1.Competencia)
], Partido.prototype, "oCompetencia", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Gol_1.Gol)
], Partido.prototype, "listaGol", void 0);
Partido = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Partido' })
], Partido);
exports.Partido = Partido;
