
import {BelongsToMany , Model, Table, Column, HasOne, HasMany, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Pago } from './Pago';
import { Suscripcion } from './Suscripcion';
import { TipoPremio } from './TipoPremio';
import { TSuscSusc } from './TipoSuscripcionSuscripcion';


@Table({tableName : 'TipoSuscripcion'})
export class TipoSuscripcion extends Model {
    @Column(DataType.STRING) nom !: string

    @ForeignKey(()=>Pago)
    @Column(DataType.INTEGER) idPago !: number;

    @BelongsTo(()=>Pago) oPago !: Pago;

    @BelongsToMany(()=>Suscripcion , ()=>TSuscSusc)
    listaSuscripcion !: Suscripcion[];

    @HasMany(()=>TipoPremio)
    listaTiposPremio !: TipoPremio[];
}