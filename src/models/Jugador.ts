

import {Model, Table, Column, BelongsTo, HasMany, ForeignKey, DataType } from 'sequelize-typescript';
import { Equipo } from './Equipo';
import { Gol } from './Gol';

@Table({tableName : 'Jugador'})
export class Jugador extends Model {

    @Column(DataType.STRING) nom !: string;

    @ForeignKey(()=>Equipo)
    @Column(DataType.INTEGER) idEquipo !:number;


    @BelongsTo(()=>Equipo) oEquipo !: Equipo;

    @HasMany(()=>Gol) listaGoles !: Gol[];


    public async verIdEquipo() : Promise<number | undefined> {

        const oEquipo = await this.$get('oEquipo');
        
        if(oEquipo) {
            return oEquipo.id;
        } else {
            console.log('error al encontrar el equipo asociado')
        }

    }

}