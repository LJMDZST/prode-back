
import {Model, Table, Column, DataType } from "sequelize-typescript"

@Table({tableName : 'CodPostal'})
export class CodPostal extends Model {
    @Column(DataType.STRING(150))  nro!: string; 
}