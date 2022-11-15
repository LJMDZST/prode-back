import {Model, Table, Column, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript';
import { TipoVivienda } from './TipoVivienda';


@Table({tableName:'Vivienda'})
export class Vivienda extends Model {

    @Column(DataType.STRING(150)) nro !: string;
    @Column(DataType.STRING(150)) nroPiso !: string;


    @ForeignKey(()=>TipoVivienda)
    @Column(DataType.INTEGER) idTipoVivienda !: number;

    @BelongsTo(()=>TipoVivienda) oTipoVivienda !: TipoVivienda;

}