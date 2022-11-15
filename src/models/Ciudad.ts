import {Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({tableName : 'Ciudad'})
export class Ciudad extends Model {
    @Column(DataType.STRING(150)) nom !: string;
}


