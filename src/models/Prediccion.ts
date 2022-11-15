import {Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IGolesPartido } from '../interfaces/IGolesPartido';
import { Partido } from './Partido';




@Table({tableName : 'Prediccion'})
export class Prediccion extends Model {
    @Column(DataType.INTEGER) g1 !: number;
    @Column(DataType.INTEGER) g2 !: number;

    @ForeignKey(()=>Partido)
    @Column(DataType.INTEGER) idPartido!:number ;

    @BelongsTo(()=>Partido) oPartido !: Partido;

    public async mostrarGolesDelPartido () : Promise<IGolesPartido | undefined> {

        const oPartido = await this.$get('oPartido');
        if(oPartido) {

            return {
                cantGolesEq1 : await oPartido.verCantGolesEq1(),
                cantGolesEq2 : await oPartido.verCantGolesEq2(),
            }
        } else {
            console.log('error al encontrar el partido asociado');
        }

    }
}