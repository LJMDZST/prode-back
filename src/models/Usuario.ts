import jwt  from "jsonwebtoken";
import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Cliente } from "./Cliente";

@Table({tableName:'Usuario'})
export class Usuario extends Model {
    
    /**-------------ATRIBUTOS---------------- */
    @Column(DataType.STRING) nom !: string;

    @Column( DataType.STRING(8)) pass !: string;
    
    @Column( DataType.TEXT )token !: string;


    @ForeignKey(()=>Cliente) 
    @Column(DataType.INTEGER) idCliente !: number;

    @BelongsTo(()=>Cliente) oCliente !: Cliente;
    
    /** ------------METODOS ---------------- */
    public async generarToken () : Promise<string> {
        const token = jwt.sign( 
            { 
                nom : this.nom , 
                pass : this.pass 
            },
            'misemilla',
            { 
                expiresIn : '2h' 
            } 
        );
        
        await this.update({token : token})
        
        return token;
    }   

    public  validarToken () : boolean {
        try {

            const validacion = jwt.verify(this.token, 'misemilla');

            console.log(JSON.stringify(validacion))
            return true;

        } catch (error) {
            console.log(error);
        }

        return false;
    }

}