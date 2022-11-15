
import { Model, Table, Column, DataType, HasMany, ForeignKey, PrimaryKey, BelongsTo } from 'sequelize-typescript';
import { ICliente } from '../interfaces/ICliente';
import { IUsuario } from '../interfaces/IUsuario';
import { Persona } from './Persona';
import { Usuario } from './Usuario';


@Table({tableName : 'Cliente'})
export class Cliente extends Model {
    @PrimaryKey @ForeignKey(()=>Persona) 
    @Column(DataType.INTEGER) idPersona !: number;
    
    @Column(DataType.STRING(150)) nom !: string;
    @Column(DataType.STRING(150)) ape !: string;
    @Column(DataType.DATEONLY) fechaNac ?: Date;

    @HasMany(()=>Usuario) listaUsuarios !: Usuario[];
    @BelongsTo(()=>Persona) oPersona !: Persona;

    public static async crearCliente ( dataCliente : ICliente ) : Promise<Cliente | undefined> {
        const {oDomicilio,oGenero,oTelefono,email,nom,ape,fechaNac} = dataCliente;

        const persona= await Persona.crearPersona({oDomicilio,oGenero,oTelefono,email});
        if(persona ) {
            const cliente = await Cliente.create({
                idPersona : persona.id, 
                ape,
                nom,
                fechaNac
            });

            return cliente;
        }

    }

    public async crearUsuario( dataUsuario : IUsuario ) : Promise<Usuario | undefined> {

        const usuario = await Usuario.create({...dataUsuario});

        if(usuario) {
            await this.$add('listaUsuarios',usuario);
            return usuario;
        }

    }


}
