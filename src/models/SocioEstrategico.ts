import {Model, Table, Column, DataType, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Persona } from './Persona';

@Table({tableName : 'SocioEstrategico'})
export class SocioEstrategico extends Model {
    
    @PrimaryKey@ForeignKey(()=>Persona)
    @Column(DataType.INTEGER) idPersona !: number;

    @Column(DataType.STRING) nom !: string;
    @Column(DataType.DATEONLY) fechaAlta !: Date;

    @BelongsTo(()=>Persona) oPersona!: Persona;
}