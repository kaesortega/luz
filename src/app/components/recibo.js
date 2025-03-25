import { useState, useEffect } from "react";

export default function Recibo(props) {
    const {
        isReciboGeneral = true,
        reciboNumero,
        mesFacturado,
        anhoFacturado,
        lecturaActual: lecturaActual,
        fechaLecturaActual: fechaLecturaActual,
        cargoFijo,
        mantRepConex,
        consumoEnergiaPrecioUnitario,
        alumbradoPublico,
        interesCompensatorio,
        notaDebito,
        igv,
        electRural,
        interMora,
        lecturaAnterior = 0, // Aseguramos que lecturaAnterior tenga un valor por defecto
        fechaLecturaAnterior = '',
        procesarSubTotal
    } = props;

    const [difLecturas, setDifLecturas] = useState(0);
    const [consumoEnergia, setConsumoEnergia] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    const border = 1;

    let datosFechasReciboGeneral;
    let datosReciboGeneral;

    // Calcular la diferencia de lecturas
    useEffect(() => {
        if (lecturaActual && lecturaAnterior) {
            const diferencia = lecturaActual - lecturaAnterior;
            setDifLecturas(parseFloat(diferencia.toFixed(2)));
        }
    }, [lecturaActual, lecturaAnterior]);

    // Calcular el consumo de energía
    useEffect(() => {
        if (consumoEnergiaPrecioUnitario && difLecturas) {
            const consumo = consumoEnergiaPrecioUnitario * difLecturas;
            setConsumoEnergia(parseFloat(consumo.toFixed(2)));
        }
    }, [consumoEnergiaPrecioUnitario, difLecturas]);

    useEffect(() => {
        if (
            cargoFijo && mantRepConex && consumoEnergia &&
            alumbradoPublico && interesCompensatorio && notaDebito &&
            igv && electRural && interMora
        ) {
            const subTotal = parseFloat(cargoFijo) + parseFloat(mantRepConex) + 
                            parseFloat(consumoEnergia) + parseFloat(alumbradoPublico) + 
                            parseFloat(interesCompensatorio) + parseFloat(notaDebito) +
                            parseFloat(igv) + parseFloat(electRural) +
                            parseFloat(interMora);
            
            setSubTotal(parseFloat(subTotal.toFixed(2)))
            
            
                procesarSubTotal(subTotal)
            
        }
    }, [cargoFijo, mantRepConex, consumoEnergia, alumbradoPublico, interesCompensatorio, notaDebito, igv, electRural, interMora])

    if (isReciboGeneral) {
        datosReciboGeneral = (
            <>
                <div style={{ marginBottom: '10px' }}>
                    <table border={border}>
                        <thead>
                            <tr>
                                <th style={{ width: '30%' }}>Recibo Numero</th>
                                <td style={{ width: '50%' }} colSpan={2}>{reciboNumero}</td>
                            </tr>
                            <tr>
                                <th>Mes facturado</th>
                                <td>{mesFacturado}</td>
                                <td>{anhoFacturado}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </>
        );
    } else {
        datosReciboGeneral = <></>;
    }

    if (isReciboGeneral) {
        datosFechasReciboGeneral = (
            <>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        borderTop: '1px',
                        borderBottom: '1px',
                        borderColor: 'black solid',
                    }}
                >
                    <div style={{ width: '50%' }}>
                        <p>Fecha Emision</p>
                    </div>
                    <div>
                        <p>23/03/2025</p>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex' }}>
                    <div style={{ width: '50%' }}>
                        <p>Fecha Vencimiento</p>
                    </div>
                    <div style={{ width: '50%' }}>
                        <p>23/03/2025</p>
                    </div>
                </div>
            </>
        );
    } else {
        datosFechasReciboGeneral = <></>;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                marginBottom: '10px',
            }}
        >
            <div style={{ marginRight: '10px' }}>
                {datosReciboGeneral}

                <div>
                    <table border={border}>
                        <thead>
                            <tr>
                                <th>Detalle del consumo</th>
                            </tr>
                        </thead>
                    
                    </table>
                </div>

                <div>
                    <table border={border}>
                        <tbody>
                            <tr>
                                <td>Lectura actual</td>
                                <td>{lecturaActual}</td>
                                <td>{fechaLecturaActual}</td>
                            </tr>
                            <tr>
                                <td>Lectura anterior</td>
                                <td>{lecturaAnterior}</td>
                                <td>{fechaLecturaAnterior}</td>
                            </tr>
                            <tr>
                                <td>Días contabilizados</td>
                                <td></td>
                                <td>31</td>
                            </tr>
                            <tr>
                                <td>Diferencia de lecturas</td>
                                <td>{difLecturas}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Factor del medidor</td>
                                <td>1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Consumo actual</td>
                                <td>{consumoEnergia}</td>
                                <td>kWh.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div>
                    <table border={border}>
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Precio unitario</th>
                                <th>Importe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cargo fijo</td>
                                <td></td>
                                <td>{parseFloat(cargoFijo).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Mant. y reposición de conexión</td>
                                <td></td>
                                <td>{parseFloat(mantRepConex).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Consumo de energía</td>
                                <td>{consumoEnergiaPrecioUnitario}</td>
                                <td>{consumoEnergia}</td>
                            </tr>
                            <tr>
                                <td>Alumbrado público</td>
                                <td></td>
                                <td>{parseFloat(alumbradoPublico).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Interés compensatorio</td>
                                <td></td>
                                <td>{parseFloat(interesCompensatorio).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Nota Débito Res N 210-2018-OS/CD</td>
                                <td></td>
                                <td>{parseFloat(notaDebito).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>IGV</td>
                                <td></td>
                                <td>{parseFloat(igv).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Electrificación rural (ley 28749)</td>
                                <td></td>
                                <td>{parseFloat(electRural).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Interés moratorio</td>
                                <td></td>
                                <td>{parseFloat(interMora).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Sub total del mes</td>
                                <td></td>
                                <td>{parseFloat(subTotal).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {datosFechasReciboGeneral}
            </div>
        </div>
    );
}
