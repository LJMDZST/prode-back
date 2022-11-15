"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './prode.env' });
const RouterClientes_1 = require("./router/RouterClientes");
const server_1 = require("./server/server");
const server = new server_1.Server();
server.agregarRouter('/cliente', RouterClientes_1.RouterClientes.usar());
server.iniciarServer();
