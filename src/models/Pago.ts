import {Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({tableName : 'Pago'})
export class Pago extends Model {
    @Column(DataType.STRING) codigo !: string
}