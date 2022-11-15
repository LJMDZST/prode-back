import {Model, Table, Column, ForeignKey, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { Competencia } from './Competencia';
import { Equipo } from './Equipo';
import { Gol } from './Gol';


@Table({tableName : 'Partido'})
export class Partido extends Model {

    @ForeignKey(()=>Competencia)
    @Column(DataType.INTEGER) idCompetencia !: number;

    @ForeignKey(()=>Equipo)
    @Column(DataType.INTEGER) idEquipo1 !: number;

    @ForeignKey(()=>Equipo)
    @Column(DataType.INTEGER) idEquipo2 !: number;

    @BelongsTo(()=>Equipo,'idEquipo1') equipo1 !: Equipo;
    @BelongsTo(()=>Equipo,'idEquipo2') equipo2 !: Equipo;
    @BelongsTo(()=>Competencia) oCompetencia !: Competencia;
    @HasMany(()=>Gol) listaGol !: Gol[];

    public async verCantGolesEq1 () : Promise<number> {

        const oEq1 = await this.$get('equipo1');
        if(oEq1) {
            const listaGolesTotales = await Gol.findAll({where : {idParido : this.id}});
            let totalGolesE1 = 0;
            await Promise.all(listaGolesTotales.map(async gol => {
                if( oEq1.id === await gol.mostrarIdEquipoJugador() ) {
                    totalGolesE1 = totalGolesE1 + 1;
                }
            } ));

            return totalGolesE1;

        }

        return 0;
    }   

    public async verCantGolesEq2 () : Promise<number> {

        const oEq2 = await this.$get('equipo2');
        if(oEq2) {
            const listaGolesTotales = await Gol.findAll({where : {idParido : this.id}});
            let totalGolesE2 = 0;
            await Promise.all(listaGolesTotales.map(async gol => {
                if( oEq2.id === await gol.mostrarIdEquipoJugador() ) {
                    totalGolesE2 = totalGolesE2 + 1;
                }
            } ));

            return totalGolesE2;

        }

        return 0;
    }   

}