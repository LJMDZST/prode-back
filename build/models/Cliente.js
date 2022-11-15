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
var Cliente_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Persona_1 = require("./Persona");
const Usuario_1 = require("./Usuario");
let Cliente = Cliente_1 = class Cliente extends sequelize_typescript_1.Model {
    static crearCliente(dataCliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const { oDomicilio, oGenero, oTelefono, email, nom, ape, fechaNac } = dataCliente;
            const persona = yield Persona_1.Persona.crearPersona({ oDomicilio, oGenero, oTelefono, email });
            if (persona) {
                const cliente = yield Cliente_1.create({
                    idPersona: persona.id,
                    ape,
                    nom,
                    fechaNac
                });
                return cliente;
            }
        });
    }
    crearUsuario(dataUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield Usuario_1.Usuario.create(Object.assign({}, dataUsuario));
            if (usuario) {
                yield this.$add('listaUsuarios', usuario);
                return usuario;
            }
        });
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.ForeignKey)(() => Persona_1.Persona),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Cliente.prototype, "idPersona", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150))
], Cliente.prototype, "nom", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150))
], Cliente.prototype, "ape", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY)
], Cliente.prototype, "fechaNac", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Usuario_1.Usuario)
], Cliente.prototype, "listaUsuarios", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Persona_1.Persona)
], Cliente.prototype, "oPersona", void 0);
Cliente = Cliente_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Cliente' })
], Cliente);
exports.Cliente = Cliente;
