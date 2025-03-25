'use client'
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import Calculo from "../crear/page";
import environment from "@/app/environment";



export default function CalculoVer({params}) {

  const unwrappedParams = use(params);  // Esto devolverá el objeto params resuelto.

  // Acceder al parámetro id de la ruta
  const id = unwrappedParams.id;

  const [dto, setDto] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${environment.protocol}://${environment.api}/api/calculos/` + id)

        if (response.ok){
          const data = await response.json()
          console.log(data)
          setDto(data)
        }else {
          console.log("Ocurrio un error")
        }
      
      } catch (e){
        console.log("Ocurrio un error al consumir el servicio")
      }
    }

    fetchData()
  }, [])

  return (
    <Calculo calculoDto={dto}></Calculo>
  );
}