import {Model, Table, Column, DataType } from 'sequelize-typescript';


@Table({tableName : 'TipoPremioUsuario'})
export class TipoPremioUsuario extends Model {
    @Column(DataType.STRING) descripcio !: string
}