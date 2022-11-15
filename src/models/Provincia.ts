
import {Model, Table, Column, DataType } from "sequelize-typescript";

@Table({tableName : 'Provincia'})
export class Provincia extends Model {
    @Column(DataType.STRING(150)) nom !: string; 
}