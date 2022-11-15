import {Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Suscripcion } from './Suscripcion';


@Table({tableName : 'Competencia'})
export class Competencia extends Model {
    @Column(DataType.STRING) nom !: string

    @ForeignKey(()=>Suscripcion)
    @Column(DataType.INTEGER) idSuscripcion !: number;

    @BelongsTo(()=>Suscripcion) oSuscripcion !: Suscripcion;
}