import {Model, Table, Column, BelongsTo, DataType, ForeignKey } from 'sequelize-typescript';
import { IDomicilio } from '../interfaces/IDomicilio';
import { Ciudad } from './Ciudad';
import { CodPostal } from './CodPostal';
import { Pais } from './Pais';
import { Provincia } from './Provincia';
import { TipoVivienda } from './TipoVivienda';
import { Vivienda } from './Vivienda';


@Table({tableName : 'Domicilio'})
export class Domicilio  extends Model {
    @Column(DataType.STRING(150)) calle !: string;
    @Column(DataType.STRING(150)) barrio !: string;


    @ForeignKey(()=>CodPostal)
    @Column(DataType.INTEGER) idCodPostal !: number;

    @ForeignKey(()=>Pais)     
    @Column(DataType.INTEGER) idPais !: number;

    @ForeignKey(()=>Provincia)
    @Column(DataType.INTEGER) idProvincia !: number;

    @ForeignKey(()=>Ciudad)   
    @Column(DataType.INTEGER) idCiudad !: number;

    @ForeignKey(()=>Vivienda) 
    @Column(DataType.INTEGER) idVivienda !: number;

    @BelongsTo(()=>CodPostal)   oCodPostal !: CodPostal;
    @BelongsTo(()=>Pais)        oPais !: Pais;
    @BelongsTo(()=>Provincia)   oProv !: Provincia;
    @BelongsTo(()=>Ciudad)      oCiudad !: Ciudad;
    @BelongsTo(()=>Vivienda)    oVivienda !: Vivienda;


    public static async crearDomicilio( dataDom : IDomicilio ) : Promise<Domicilio | undefined> {

        const { oPais, oCiudad, oProvincia, oVivienda, oCodPostal, calle, barrio } = dataDom;

        const pais = await Pais.create({...oPais});
        const ciudad = await Ciudad.create({...oCiudad});
        const provincia = await Provincia.create({...oProvincia});
        const vivienda = await Vivienda.create({...oVivienda},{include: { model : TipoVivienda} });
        const codPostal = await CodPostal.create({...oCodPostal});

        if(pais && ciudad && provincia && vivienda && codPostal) {
            const oDomicilio = await Domicilio.create({calle, barrio});

            await oDomicilio.$set('oPais',pais);
            await oDomicilio.$set('oCiudad',ciudad);
            await oDomicilio.$set('oVivienda',vivienda);
            await oDomicilio.$set('oCodPostal',codPostal);
            await oDomicilio.$set('oProv',provincia);

            return oDomicilio;
            
        }


    }
     


}