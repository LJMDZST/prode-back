import {Model, Table, Column, DataType, BelongsTo, ForeignKey, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { IResultadoPrediccion } from '../interfaces/IResultadoPrediccion';
import { Competencia } from './Competencia';
import { TablaPrediccion } from './TablaPrediccion';
import { TipoSuscripcion } from './TipoSuscripcion';
import { TSuscSusc } from './TipoSuscripcionSuscripcion';
import { Usuario } from './Usuario';

@Table({tableName : 'Suscripcion'})
export class Suscripcion extends Model {

    @Column(DataType.DATEONLY) fecha !: Date;

    @ForeignKey(()=>Usuario) 
    @Column(DataType.INTEGER) idUsuario !: number;

    @BelongsTo(()=>Usuario) oUsuario !: Usuario;

    @BelongsToMany(()=>TipoSuscripcion,()=>TSuscSusc) 
    listaTipoSuscripcion !: TipoSuscripcion[];

    @HasMany(()=>Competencia) listaCompetencias !: Competencia[];

    @HasOne(()=>TablaPrediccion) oTablaPrediccion !: TablaPrediccion;


    

    public async mostrarTablaPrediccion() : Promise<IResultadoPrediccion[] | undefined>{

        const oTablaPrediccion = await TablaPrediccion.findOne({where : {idSuscripcion : this.id}});

        if(oTablaPrediccion ) {
            return await oTablaPrediccion.mostrarListaPuntajePredicciones();
        }  else {
            console.log(`error al obtener la tabla de predicciones de suscripcion :${this.id} de usuario ${this.idUsuario}`);
        }

    }
    

}