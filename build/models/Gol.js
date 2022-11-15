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
exports.Gol = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Jugador_1 = require("./Jugador");
const Partido_1 = require("./Partido");
const TipoGol_1 = require("./TipoGol");
let Gol = class Gol extends sequelize_typescript_1.Model {
    mostrarIdEquipoJugador() {
        return __awaiter(this, void 0, void 0, function* () {
            const oJugador = yield this.$get('oJugador');
            if (oJugador) {
                return yield oJugador.verIdEquipo();
            }
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Partido_1.Partido),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Gol.prototype, "idPartido", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Jugador_1.Jugador),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Gol.prototype, "idJugador", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => TipoGol_1.TipoGol),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Gol.prototype, "idTipoGol", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Jugador_1.Jugador)
], Gol.prototype, "oJugador", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Partido_1.Partido)
], Gol.prototype, "oPartido", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => TipoGol_1.TipoGol)
], Gol.prototype, "oTipoGol", void 0);
Gol = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Gol' })
], Gol);
exports.Gol = Gol;
