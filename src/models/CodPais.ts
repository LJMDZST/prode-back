import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName:'CodPais'})
export class CodPais extends Model {
    @Column(DataType.STRING(150))  nro !: string;

}