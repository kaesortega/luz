export default function CalculoDto(props) {
    const {
      numeroRecibo,
      mesFacturado,
      anhoFacturado,
      lecturaActualReciboGeneral,
      fechaLecturaActualReciboGeneral,
      cargoFijo,
      mantRepCon,
      consEnerPrecUnit,
      alumPubl,
      inteComp,
      notaDebi,
      igv,
      elecRura,
      inteMora,
      fechLectActuClinVete,
      lectActuClinVete,
      fechLectActuClinOdon,
      lectActuClinOdon,
      subtClinOdon,
      subtClinVete,
      subtProp,
      subtReciGene
    } = props;
  
    // Construir el DTO con todos los campos
    const dto = {
      numeroRecibo,
      mesFacturado,
      anhoFacturado,
      lecturaActualReciboGeneral,
      fechaLecturaActualReciboGeneral,
      cargoFijo,
      mantRepCon,
      consEnerPrecUnit,
      alumPubl,
      inteComp,
      notaDebi,
      igv,
      elecRura,
      inteMora,
      fechLectActuClinVete,
      lectActuClinVete,
      fechLectActuClinOdon,
      lectActuClinOdon,
      subtClinOdon,
      subtClinVete,
      subtProp,
      subtReciGene
    };
  
    // Retornar el DTO
    return dto;
  }
  