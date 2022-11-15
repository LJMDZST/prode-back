import {Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { TipoSuscripcion } from './TipoSuscripcion';
@Table({tableName : 'TipoPremio'})

export class TipoPremio extends Model {
    
    @Column(DataType.STRING) descripcion !: string

    @Column(DataType.DATEONLY) fechaAlta !: Date;

    @Column(DataType.DATEONLY) fechaBaja !: Date;
    
    @Column(DataType.INTEGER) stock !: Number;


    @ForeignKey(()=>TipoSuscripcion)
    @Column(DataType.INTEGER) idTipoSuscripcion !: number;

    @BelongsTo(()=>TipoSuscripcion) oTipoSuscripcion !: TipoSuscripcion;
    

}