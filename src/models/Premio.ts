import {Model, Table, Column, DataType } from 'sequelize-typescript';
@Table({tableName : 'Premio'})
export class Premio extends Model {
@Column(DataType.STRING)nom !: string
}