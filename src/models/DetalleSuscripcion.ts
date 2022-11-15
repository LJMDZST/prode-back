import {Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Competencia } from './Competencia';
import { Suscripcion } from './Suscripcion';

@Table({tableName : 'DetalleSuscripcion'})
export class DetalleSuscripcion extends Model {
    
    @ForeignKey(()=>Suscripcion)
    @Column(DataType.INTEGER) idSuscripcion !: number;
   
    @ForeignKey(()=>Competencia)
    @Column(DataType.INTEGER) idCompetencia !: number;
}