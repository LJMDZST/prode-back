import cors from 'cors';
import express, {Express, Router } from 'express';
import { db } from '../config/dbConfig';

export class Server {

    private server !: Express;
    constructor(){
        this.server = express();
        this.server.use(cors());
        this.server.use(express.json())
    }

    public agregarRouter = ( _ruta : string | RegExp , _router : Router ) : void => {
        this.server.use( _ruta , _router );
    } 

    public iniciarServer = ( )  =>{
        this.server.listen( process.env.SERVER_PORT, ()=>{
            console.log( ` Prode Server inciciado en PUERTO :${process.env.SERVER_PORT} `  );
            db.sync().then( seq => console.log(`db sincronizada : ${seq.getDatabaseName()}`));
        } )
    }

}

