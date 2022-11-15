
import {Model, Table, Column, DataType, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import { Suscripcion } from './Suscripcion';
import { TipoSuscripcion } from './TipoSuscripcion';

@Table({tableName : 'TSuscSusc'})
export class TSuscSusc extends Model {
    @PrimaryKey
    @ForeignKey(()=>Suscripcion)
    @Column(DataType.INTEGER) idSuscripcion !: number;

    @PrimaryKey
    @ForeignKey(()=>TipoSuscripcion)
    @Column(DataType.INTEGER) idTipoSuscripcion !: number;

    @BelongsTo(()=>TipoSuscripcion) oTipoSuscripcion !: TipoSuscripcion;
    @BelongsTo(()=>Suscripcion) oSuscripcion !: Suscripcion;
}