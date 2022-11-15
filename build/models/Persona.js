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
var Persona_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Domicilio_1 = require("./Domicilio");
const Genero_1 = require("./Genero");
const Telefono_1 = require("./Telefono");
let Persona = Persona_1 = class Persona extends sequelize_typescript_1.Model {
    static crearPersona(dataPersona) {
        return __awaiter(this, void 0, void 0, function* () {
            const { oDomicilio, oGenero, oTelefono, email } = dataPersona;
            const personaExistente = yield Persona_1.findOne({ where: { email } });
            if (!personaExistente) {
                const domicilio = yield Domicilio_1.Domicilio.crearDomicilio(oDomicilio);
                const genero = yield Genero_1.Genero.create(Object.assign({}, oGenero));
                const telefono = yield Telefono_1.Telefono.create(Object.assign({}, oTelefono));
                if (domicilio && genero && telefono) {
                    const oPersona = yield Persona_1.create({ email });
                    yield oPersona.$set('oDomicilio', domicilio);
                    yield oPersona.$set('oGenero', genero);
                    yield oPersona.$set('oTelefono', telefono);
                    return oPersona;
                }
            }
        });
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150))
], Persona.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Genero_1.Genero),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Persona.prototype, "idGenero", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Telefono_1.Telefono),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Persona.prototype, "idTelefono", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Domicilio_1.Domicilio),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Persona.prototype, "idDomicilio", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Genero_1.Genero)
], Persona.prototype, "oGenero", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Telefono_1.Telefono)
], Persona.prototype, "oTelefono", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Domicilio_1.Domicilio)
], Persona.prototype, "oDomicilio", void 0);
Persona = Persona_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Persona' })
], Persona);
exports.Persona = Persona;
