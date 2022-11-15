
import {Model, Table, Column, DataType } from "sequelize-typescript";


@Table({tableName : 'CodArea'})
export class CodArea extends Model{
    @Column(DataType.STRING(150)) nro !: string;
}