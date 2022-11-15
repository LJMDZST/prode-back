import { Model, Table, Column, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript';
import { CodArea } from './CodArea';
import { CodPais } from './CodPais';


@Table({tableName : 'Telefono'})
export class Telefono extends Model {
    
    @Column(DataType.STRING) nro !: string;

    @ForeignKey(()=>CodArea) 
    @Column(DataType.INTEGER) idCodArea !: number;

    @ForeignKey(()=>CodPais) 
    @Column(DataType.INTEGER) idCodPais !: number;

    @BelongsTo(()=>CodArea) oCodArea !: CodArea;

    @BelongsTo(()=>CodPais) oCodPais !: CodPais;
}