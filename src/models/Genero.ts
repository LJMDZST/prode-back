import {Model, Table, Column, DataType } from 'sequelize-typescript';


@Table({tableName : 'Genero'})
export class Genero extends Model {
    @Column(DataType.STRING(150)) nom !: string
}