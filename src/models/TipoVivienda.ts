import {Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({tableName : 'TipoVivienda'})
export class TipoVivienda extends Model {
    @Column(DataType.STRING(150)) nom !: string
}