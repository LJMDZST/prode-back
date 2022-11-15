import {Model, Table, Column, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript';
import { IPersona } from '../interfaces/IPersona';
import { Domicilio } from './Domicilio';
import { Genero } from './Genero';
import { Telefono } from './Telefono';



@Table({tableName : 'Persona'})
export class Persona extends Model {

    @Column(DataType.STRING(150)) email !: string;

    @ForeignKey(()=>Genero) @Column(DataType.INTEGER) idGenero !: number;
    @ForeignKey(()=> Telefono) @Column(DataType.INTEGER) idTelefono !: number;
    @ForeignKey(()=>Domicilio) @Column(DataType.INTEGER) idDomicilio !: number;    

    @BelongsTo(()=>Genero) oGenero ?: Genero;
    @BelongsTo(()=> Telefono) oTelefono !: Telefono;
    @BelongsTo(()=>Domicilio) oDomicilio !: Domicilio;


    public static async crearPersona ( dataPersona : IPersona  ) : Promise<Persona | undefined> {
        const { oDomicilio, oGenero, oTelefono, email} = dataPersona;
        const personaExistente = await Persona.findOne({where : {email}});
        if(! personaExistente ) {
            const domicilio = await Domicilio.crearDomicilio( oDomicilio  );
            const genero = await Genero.create({...oGenero});
            const telefono = await Telefono.create({...oTelefono});
            
            if( domicilio && genero && telefono) {
                const oPersona =  await Persona.create({email });
    
                await oPersona.$set('oDomicilio',domicilio);
                await oPersona.$set('oGenero',genero);
                await oPersona.$set('oTelefono',telefono);
    
                return oPersona;
            }
        }

    }
}