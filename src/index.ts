
import dotenv from 'dotenv';
dotenv.config({path:'./prode.env'});
import { RouterClientes } from "./router/RouterClientes";
import { RouterSuscripciones } from './router/RouterSuscripcion';
import { Server } from "./server/server";


const server = new Server();

server.agregarRouter( '/cliente' , RouterClientes.usar() );

server.agregarRouter( '/susc' , RouterSuscripciones.usar() );

server.iniciarServer();