import {Model, Table, Column, HasMany, DataType } from 'sequelize-typescript';
import { Jugador } from './Jugador';


@Table({tableName : 'Equipo'})
export class Equipo extends Model {
    @Column(DataType.STRING) nom !: string

    @HasMany(()=>Jugador) listaJugadores !: Jugador[];
}