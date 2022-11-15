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
exports.Jugador = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Equipo_1 = require("./Equipo");
const Gol_1 = require("./Gol");
let Jugador = class Jugador extends sequelize_typescript_1.Model {
    verIdEquipo() {
        return __awaiter(this, void 0, void 0, function* () {
            const oEquipo = yield this.$get('oEquipo');
            if (oEquipo) {
                return oEquipo.id;
            }
            else {
                console.log('error al encontrar el equipo asociado');
            }
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Jugador.prototype, "nom", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Equipo_1.Equipo),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Jugador.prototype, "idEquipo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Equipo_1.Equipo)
], Jugador.prototype, "oEquipo", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Gol_1.Gol)
], Jugador.prototype, "listaGoles", void 0);
Jugador = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Jugador' })
], Jugador);
exports.Jugador = Jugador;
