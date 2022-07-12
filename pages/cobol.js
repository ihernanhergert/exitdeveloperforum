import React from "react";

const cobol = () => {
  return (
    <div className="containerData">
      {/* Pregunta 1 */}
      <h2> Pregunta 1 </h2>
      <h3>¿Qué es lo que sabe sobre COBOL?</h3>
      <h4>Respuesta: COBOL es sinónimo de lenguaje común orientado a negocios.
         El Departamento de Defensa de ESTADOS UNIDOS,
         en una conferencia, se trata CODASYL (Conference on Data Systems Language)
         para desarrollar un lenguaje para reuniones de negocios necesidades de
          procesamiento de datos que ahora se conoce como COBOL.</h4>
       {/* Pregunta 2 */}
       <h2>Pregunta 2</h2>
       <h3>Lista algunas características de COBOL.</h3>
       <h4>COBOL es un lenguaje estándar que puede ser compilado y ejecutado en varias máquinas. Es ideal para aplicaciones orientadas
           a la empresa de que se puede manejar grandes volúmenes de datos. Proporciona numerosos bedugging
           y herramientas de prueba. COBOL es un lenguaje estructurado; tiene diferentes divisiones, por lo que es fácil de depurar.
        </h4>
        {/* Pregunta 3*/}
        <h2>Pregunta 3</h2>
        <h3>Nombre las divisiones en un programa COBOL.</h3>
        <h4>Identification Division, Environment Division, Data Division, Procedure Division.</h4>
        {/* */}
        
    </div>
  );
};

export default cobol;
