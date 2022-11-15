"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dbConfig_1 = require("../config/dbConfig");
class Server {
    constructor() {
        this.agregarRouter = (_ruta, _router) => {
            this.server.use(_ruta, _router);
        };
        this.iniciarServer = () => {
            this.server.listen(process.env.SERVER_PORT, () => {
                console.log(` Prode Server inciciado en PUERTO :${process.env.SERVER_PORT} `);
                dbConfig_1.db.sync().then(seq => console.log(`db sincronizada : ${seq.getDatabaseName()}`));
            });
        };
        this.server = (0, express_1.default)();
        this.server.use((0, cors_1.default)());
        this.server.use(express_1.default.json());
    }
}
exports.Server = Server;
