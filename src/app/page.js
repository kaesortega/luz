'use client'

import Recibo from "./components/recibo";
import React, { useEffect, useState } from 'react';

export default function Page() {
  
  const [reciboNumero, setReciboNumero] = useState('');
  const [mesFacturado, setMesFacturado] = useState('');
  const [anhoFacturado, setAnhoFacturado] = useState('');
  const [lecturaActualReciboGeneral, setLecturaActualReciboGeneral] = useState(0)
  const [fechaLecturaActualReciboGeneral, setFechaLecturaActualReciboGeneral] = useState('')
  const [cargoFijo, setCargoFijo] = useState(0)
  const [mantRepConexion, setMantRepConexion] = useState(0)
  const [consumoEnergiaPrecioUnitario, setConsumoEnergiaPrecioUnitario] = useState(0)
  const [alumbradoPublico, setAlumbradoPublico] = useState(0)
  const [interesCompensatorio, setInteresCompensatorio] = useState(0)
  const [notaDebito, setNotaDebito] = useState(0)
  const [igv, setIgv] = useState(0)
  const [electRural, setElecRural] = useState(0)
  const [interMora, setInterMora] = useState(0)
  const [fechaLecturaActualClinOdont, setFechaLecturaActualClinOdont] = useState('')
  const [lecturaActualClinOdont, setLecturaActualClinOdont] = useState(0)
  const [fechaLecturaActualClinVet, setFechaLecturaActualClinVet] = useState('')
  const [lecturaActualClinVet, setLecturaActualClinVet] = useState(0)
  const [subTotalClinOdont, setSubTotalClinOdont] = useState(0)
  const [subTotalClinVet, setSubTotalClinVet] = useState(0)
  const [subTotalProp, setSubTotalProp] = useState(0)
  const [subTotalReciboGeneral, setSubTotalReciboGeneral] = useState(0)

  const lecturaAnteriorReciboGeneral = 330200.50;
  const fechaLecturaAnteriorReciboGeneral = "23/03/2025";

  const lecturaAnteriorClinOdont = 120100.50;
  const fechaLecturaAnteriorClinOdont = "23/03/2025";

  const lecturaAnteriorClinVet = 120100.50;
  const fechaLecturaAnteriorClinVet = "23/03/2025";

  const procesarSubTotalClinVet = (subTotal) => {
    setSubTotalClinVet(subTotal)
  } 

  const procesarSubTotalClinOdont = (subtotal) => {
    setSubTotalClinOdont(subtotal)
  }

  const procesarSubTotalReciboGeneral = (subtotal) => {
    setSubTotalReciboGeneral(subtotal)
  }


  // Handle change function for all input fields
  const handleChange = (event, set) => {
    set(event.target.value); // Update state with the new input value
  };


  useEffect(() => {
    if (subTotalClinOdont && subTotalClinVet) {
      console.log(subTotalReciboGeneral)
      const subTotalProp =  subTotalReciboGeneral - (subTotalClinOdont + subTotalClinVet) 
      setSubTotalProp(subTotalProp)
    }
  })


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ marginBottom: '50px', width: '100%' }}> {/* INPUTS */}
        <h2>Datos Recibo general</h2>
        <div style={{ width: '100%' }}>
          <label>Recibo Numero:</label>
          <input
            value={reciboNumero}
            onChange={(event) => handleChange(event, setReciboNumero)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Mes facturado:</label>
          <input
            value={mesFacturado}
            onChange={(event) => handleChange(event, setMesFacturado)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Año facturado:</label>
          <input
            value={anhoFacturado}
            onChange={(event) => handleChange(event, setAnhoFacturado)}
          />
        </div>

        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 10 }}> {/* Lectura actual inputs */}
          <div>
            <label>Lectura actual:</label>
            <input
              value={lecturaActualReciboGeneral}
              onChange={(event) => handleChange(event, setLecturaActualReciboGeneral)}
            />
          </div>
          <div>
            <label>Fecha:</label>
            <input
              type="date"
              value={fechaLecturaActualReciboGeneral}
              onChange={(event) => handleChange(event, setFechaLecturaActualReciboGeneral)}
            />
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <label>Cargo fijo:</label>
          <input
            value={cargoFijo}
            onChange={(event) => handleChange(event, setCargoFijo)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Mant. y reposición de conexión:</label>
          <input
            value={mantRepConexion}
            onChange={(event) => handleChange(event, setMantRepConexion)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Consumo de energía (precio unitario):</label>
          <input
            value={consumoEnergiaPrecioUnitario}
            onChange={(event) => handleChange(event, setConsumoEnergiaPrecioUnitario)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Alumbrado publico:</label>
          <input
            value={alumbradoPublico}
            onChange={(event) => handleChange(event, setAlumbradoPublico)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Interés compensatorio:</label>
          <input
            value={interesCompensatorio}
            onChange={(event) => handleChange(event, setInteresCompensatorio)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Nota Debito Res N 210-2018-OS/CD:</label>
          <input
            value={notaDebito}
            onChange={(event) => handleChange(event, setNotaDebito)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>IGV:</label>
          <input
            value={igv}
            onChange={(event) => handleChange(event, setIgv)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Electrificación rural (ley 28749):</label>
          <input
            value={electRural}
            onChange={(event) => handleChange(event, setElecRural)}
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Interés moratorio:</label>
          <input
            value={interMora}
            onChange={(event) => handleChange(event, setInterMora)}
          />
        </div>

        <h4>Datos clinica odontologica</h4>
        <div style={{ width: '100%' }}>
          <label>Fecha lectura actual:</label>
          <input
            value={fechaLecturaActualClinOdont}
            onChange={(event) => handleChange(event, setFechaLecturaActualClinOdont)}
            type="date"
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Lectura actual:</label>
          <input
            value={lecturaActualClinOdont}
            onChange={(event) => handleChange(event, setLecturaActualClinOdont)}
            
          />
        </div>

        <h4>Datos clinica veterinaria</h4>
        <div style={{ width: '100%' }}>
          <label>Fecha lectura actual:</label>
          <input
            value={fechaLecturaActualClinVet}
            onChange={(event) => handleChange(event, setFechaLecturaActualClinVet)}
            type="date"
          />
        </div>

        <div style={{ width: '100%' }}>
          <label>Lectura actual:</label>
          <input
            value={lecturaActualClinVet}
            onChange={(event) => handleChange(event, setLecturaActualClinVet)}
            
          />
        </div>

      </div>

      {/* Recibo General */}
      <h3>Recibo General</h3>
      <Recibo 
        reciboNumero={reciboNumero}
        mesFacturado={mesFacturado}
        anhoFacturado={anhoFacturado}
        lecturaActual={lecturaActualReciboGeneral}
        fechaLecturaActual={fechaLecturaActualReciboGeneral}
        cargoFijo={cargoFijo}
        mantRepConex={mantRepConexion}
        consumoEnergiaPrecioUnitario={consumoEnergiaPrecioUnitario}
        alumbradoPublico={alumbradoPublico}
        interesCompensatorio={interesCompensatorio}
        notaDebito={notaDebito}
        igv={igv}
        electRural={electRural}
        interMora={interMora}
        lecturaAnterior={lecturaAnteriorReciboGeneral}
        fechaLecturaAnterior={fechaLecturaAnteriorReciboGeneral}
        procesarSubTotal={procesarSubTotalReciboGeneral}
      />

      <h3>Recibo Consultorio Dental</h3>
      <Recibo 
        isReciboGeneral={false} 
        lecturaActual={lecturaActualClinOdont}
        fechaLecturaActual={fechaLecturaActualClinOdont}
        lecturaAnterior={lecturaAnteriorClinOdont}
        fechaLecturaAnterior={fechaLecturaAnteriorClinOdont}
        consumoEnergiaPrecioUnitario={consumoEnergiaPrecioUnitario}
        cargoFijo={cargoFijo/3}
        mantRepConex={mantRepConexion/3}
        alumbradoPublico={alumbradoPublico/3}
        interesCompensatorio={interesCompensatorio/3}
        notaDebito={notaDebito/3}
        igv={igv/3}
        electRural={electRural/3}
        interMora={interMora/3}
        procesarSubTotal={procesarSubTotalClinOdont}
        />

      <h3>Recibo veterinaria</h3>
      <Recibo 
        isReciboGeneral={false} 
        lecturaActual={lecturaActualClinVet}
        fechaLecturaActual={fechaLecturaActualClinVet}
        lecturaAnterior={lecturaAnteriorClinVet}
        fechaLecturaAnterior={fechaLecturaAnteriorClinVet}
        consumoEnergiaPrecioUnitario={consumoEnergiaPrecioUnitario}
        cargoFijo={cargoFijo/3}
        mantRepConex={mantRepConexion/3}
        alumbradoPublico={alumbradoPublico/3}
        interesCompensatorio={interesCompensatorio/3}
        notaDebito={notaDebito/3}
        igv={igv/3}
        electRural={electRural/3}
        interMora={interMora/3}
        procesarSubTotal={procesarSubTotalClinVet}
        />

        <table  border={1}>
          <thead>
            <tr>
              <th>Clinica Dental Ortega</th>
              <td>S/ {parseFloat(subTotalClinOdont).toFixed(2)}</td>
            </tr>
            <tr>
              <th>Clinica veterinaria</th>
              <td>S/ {parseFloat(subTotalClinVet).toFixed(2)}</td>
            </tr>
            <tr>
              <th>Propietario</th>
              <td>S/ {parseFloat(subTotalProp).toFixed(2)}</td>
            </tr>
          </thead>
        </table>
        
    </div>
  );
}
