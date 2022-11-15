

import {Model, Table, Column, DataType, ForeignKey, PrimaryKey, BelongsTo } from 'sequelize-typescript';
import { Prediccion } from './Prediccion';
import { TablaPrediccion } from './TablaPrediccion';


@Table({tableName : 'DetallePrediccion'})
export class DetallePrediccion extends Model {
    @PrimaryKey @ForeignKey(()=>Prediccion) 
    @Column(DataType.INTEGER) idPrediccion !: number;

    @PrimaryKey @ForeignKey(()=>TablaPrediccion)
    @Column(DataType.INTEGER) idTablaPrediccion !: number;

    @BelongsTo(()=>TablaPrediccion) oTablaPrediccion !: TablaPrediccion;
    @BelongsTo(()=>Prediccion) oPrediccion !: Prediccion;
    

    public async calcularPuntosPrediccionResultado() : Promise<number | undefined> {

        const oPrediccion = await Prediccion.findByPk(this.idPrediccion);
        if(oPrediccion) {

            const golesDelPartido = await oPrediccion.mostrarGolesDelPartido();
            
            if(golesDelPartido) {
                let puntosGanados = 0;
                const {cantGolesEq1 , cantGolesEq2} = golesDelPartido;
                const {g1,g2} = oPrediccion;
                
                if( g1 ===  cantGolesEq1 && g2 === cantGolesEq2 ) puntosGanados += 1;
                
                return puntosGanados;
                
            }else {
                console.log('error al obtener info de la prediccion')
            }
            
        } else {
            console.log('error al obtener info de la prediccion')
        }


    }

    public async calcularPuntosPrediccionGeneral() : Promise<number | undefined> {

        const oPrediccion = await Prediccion.findByPk(this.idPrediccion);
        if(oPrediccion) {

            const golesDelPartido = await oPrediccion.mostrarGolesDelPartido();
            
            if(golesDelPartido) {
                let puntosGanados = 0;
                
                const {cantGolesEq1 , cantGolesEq2} = golesDelPartido;

                const {g1,g2} = oPrediccion;

                if( g1 > g2 && cantGolesEq1 > cantGolesEq2 ) puntosGanados += 2;

                if( g1 === g2 && cantGolesEq1 === cantGolesEq2 ) puntosGanados += 2;

                if( g1 < g2 && cantGolesEq1 < cantGolesEq2 ) puntosGanados += 2;

                
                return puntosGanados;
                
              }  else {
                    console.log('error al obtener info de la prediccion')
                }
                
            } else {
                console.log('error al obtener info de la prediccion')
            }
        

    }

}