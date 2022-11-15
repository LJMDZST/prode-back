import {Model, Table, HasMany, BelongsTo, ForeignKey, Column, DataType } from 'sequelize-typescript';
import { IResultadoPrediccion } from '../interfaces/IResultadoPrediccion';
import { DetallePrediccion } from './DetallePrediccion';
import { Suscripcion } from './Suscripcion';



@Table({tableName : 'TablaPrediccion'})
export class TablaPrediccion extends Model {
    
    @ForeignKey(()=>Suscripcion)
    @Column(DataType.INTEGER) idSuscripcion !: number;


    @HasMany(()=>DetallePrediccion) listaDetallePrediccion !: DetallePrediccion[];


    @BelongsTo(()=>Suscripcion) oSuscripcion !: Suscripcion; 




    public async mostrarListaPuntajePredicciones () :Promise<IResultadoPrediccion[] | undefined> {

        
        const listaPrediccion = await this.$get('listaDetallePrediccion');
        if(listaPrediccion) {
            return await Promise.all(  
                listaPrediccion.map(async detallePrediccion => {
                  
                    const ptosPredGral =  await detallePrediccion.calcularPuntosPrediccionGeneral();
                    const puntosPredResult = await detallePrediccion.calcularPuntosPrediccionResultado();

                    if(ptosPredGral && puntosPredResult){
                        return {
                            puntosPredGral : ptosPredGral,
                            puntosPredResultado: puntosPredResult
                        }
                    } else {
                        console.log(`${ptosPredGral ? '' : `error al obtener puntos grales de prediccion ${detallePrediccion.idPrediccion}`}`)
                        console.log(`${puntosPredResult ? '' : `error al obtener puntos resultado de prediccion ${detallePrediccion.idPrediccion}` }`)
                        return {
                            puntosPredGral : 0,
                            puntosPredResultado : 0
                        }
                    }

                }   
            ));

        }else {
            console.log('error al obtener la lista de predicciones');
        }
    

    }

    public async calcPuntajeTotal ( ) : Promise<number | undefined> {

        const listaPrediccion = await this.$get('listaDetallePrediccion');
        let puntajeTotal = 0;
        if(listaPrediccion) {
            await Promise.all(  
                listaPrediccion.map(async detallePrediccion => {

                    const puntajeGral = await detallePrediccion.calcularPuntosPrediccionGeneral();
                    const puntajeResultado = await detallePrediccion.calcularPuntosPrediccionResultado();
                    
                    if(puntajeGral && puntajeResultado ){
                        puntajeTotal += puntajeGral + puntajeResultado;
                    }else {
                        console.log(`${ puntajeGral ? '' : `errror al obtener el puntaje gral de  prediccion :${detallePrediccion.id}` } `);
                        console.log(`${ puntajeResultado ? '' : `errror al obtener el puntaje resultado de  prediccion :${detallePrediccion.id}` } `);
                    }
                       
                } )

             );
             return puntajeTotal;
        }else {
            console.log('error al obtener la lista de predicciones');
        }
    

    }
}