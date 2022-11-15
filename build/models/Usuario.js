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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sequelize_typescript_1 = require("sequelize-typescript");
const Cliente_1 = require("./Cliente");
let Usuario = class Usuario extends sequelize_typescript_1.Model {
    /** ------------METODOS ---------------- */
    generarToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = jsonwebtoken_1.default.sign({
                nom: this.nom,
                pass: this.pass
            }, 'misemilla', {
                expiresIn: '2h'
            });
            yield this.update({ token: token });
            return token;
        });
    }
    validarToken() {
        try {
            const validacion = jsonwebtoken_1.default.verify(this.token, 'misemilla');
            console.log(JSON.stringify(validacion));
            return true;
        }
        catch (error) {
            console.log(error);
        }
        return false;
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Usuario.prototype, "nom", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(8))
], Usuario.prototype, "pass", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)
], Usuario.prototype, "token", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Cliente_1.Cliente),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Usuario.prototype, "idCliente", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Cliente_1.Cliente)
], Usuario.prototype, "oCliente", void 0);
Usuario = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Usuario' })
], Usuario);
exports.Usuario = Usuario;
