'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import env from "./env";

export default function RootLayout({ children }) {

  const [calculos, setCalculos] = useState([{}])

  useEffect(() => {

    const fetchData = async () => {
      try {
        
        const response = await fetch(`${env.protocol}://${env.api}/api/calculos`)
  
        if (response.ok){
          const data = await response.json()
          setCalculos(data)
        } else {
          console.error("Error al obtener los datos")
        }
      }catch(e){
        console.error("Error al consultar el servicio")
      }
    }

    fetchData()
    
  }, [])

  return (
    <html lang="en">
      <head>
      <style>
          {`
            /* Estilos básicos para el layout */
            body {
              display: flex;
              margin: 0;
              font-family: Arial, sans-serif;
            }
            /* Menú lateral */
            .sidebar {
              width: 250px;
              height: 100vh;
              background-color: #333;
              color: white;
              padding-top: 20px;
              position: fixed;
              left: 0;
              top: 0;
              display: flex;
              flex-direction: column;
            }
            .sidebar a {
              text-decoration: none;
              color: white;
              padding: 15px;
              text-align: left;
              border-bottom: 1px solid #444;
              
            }

            a {
              cursor: "pointer";
            }

            .sidebar a:hover {
              background-color: #575757;
            }

            /* Contenido principal */
            .main-content {
              margin-left: 250px;
              padding: 20px;
              width: calc(100% - 250px);
              height: 100vh;
              overflow-y: auto;
            }
          `}
        </style>
      </head>
      <body>
        {/* Menú lateral */}
        <div className="sidebar">
          <h2 style={{ textAlign: 'center', color: '#fff' }}>Calculos</h2>
          {/* {calculos.forEach(c => <a href="">Mes {c.mesFacturado} Año {c.anhoFacturado}</a>)} */}
          <div style={{padding:"1em", display: "flex", borderRadius: "10px"}}>
            <Link 
              href={"/"}
              style={{backgroundColor: "#CCC", display: "flex", width: "100%"}}>Nuevo calculo</Link>
          </div>
          {/* <a><Link href="/calculo">Calculo</Link></a> */}
          {calculos.length > 0 ? (
            calculos.map((calculo, index) => (
              
                <Link key={index} href={"/calculo/" + calculo.id}>{calculo.mesFacturado} {calculo.anhoFacturado}</Link>
              
            ))
          ) : (
            <p>Cargando...</p> // Mostrar mensaje de carga mientras se obtienen los datos
          )}
        </div>
        {/* Contenido principal */}
        <div className="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
