import {Model, Table, Column, PrimaryKey, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { Jugador } from './Jugador';
import { Partido } from './Partido';
import { TipoGol } from './TipoGol';

@Table({tableName : 'Gol'})
export class Gol extends Model {
    @ForeignKey(()=>Partido) 
    @Column(DataType.INTEGER) idPartido !: number;

    @ForeignKey(()=>Jugador)
    @Column(DataType.INTEGER) idJugador !: number;

    @ForeignKey(()=>TipoGol)
    @Column(DataType.INTEGER) idTipoGol !: number;

    

    @BelongsTo(()=>Jugador) oJugador !: Jugador;
    @BelongsTo(()=>Partido) oPartido !: Partido;
    @BelongsTo(()=>TipoGol) oTipoGol !: Partido;
    

    public async mostrarIdEquipoJugador () : Promise<number | undefined> {
        const oJugador = await this.$get('oJugador');

        if(oJugador) {
            return await oJugador.verIdEquipo();
        }
    }
}