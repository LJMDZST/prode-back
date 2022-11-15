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
exports.Prediccion = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Partido_1 = require("./Partido");
let Prediccion = class Prediccion extends sequelize_typescript_1.Model {
    mostrarGolesDelPartido() {
        return __awaiter(this, void 0, void 0, function* () {
            const oPartido = yield this.$get('oPartido');
            if (oPartido) {
                return {
                    cantGolesEq1: yield oPartido.verCantGolesEq1(),
                    cantGolesEq2: yield oPartido.verCantGolesEq2(),
                };
            }
            else {
                console.log('error al encontrar el partido asociado');
            }
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Prediccion.prototype, "g1", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Prediccion.prototype, "g2", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Partido_1.Partido),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Prediccion.prototype, "idPartido", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Partido_1.Partido)
], Prediccion.prototype, "oPartido", void 0);
Prediccion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Prediccion' })
], Prediccion);
exports.Prediccion = Prediccion;
