
import { Model ,Table, Column, DataType } from "sequelize-typescript"

@Table({tableName : 'Pais'})
export class Pais extends Model {
    @Column(DataType.STRING(150)) nom !: string;
}