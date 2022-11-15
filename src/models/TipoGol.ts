import {Model, Table, Column, DataType } from 'sequelize-typescript';


@Table({tableName : 'TipoGol'})
export class TipoGol  extends Model {
    @Column(DataType.STRING) nom !: string
}