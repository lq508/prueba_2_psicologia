
import React from 'react';
import Card from './Card.js';
import "../css/Lista_usuarios.css";







function Lista_usuarios(props){










/*funciones para la informacion de las personas */


let Verificacion_persona1_nombre = ()=>{
  if(props.usuarios_api.persona_1){

    return props.usuarios_api.persona_1.results[0].name.first




  }

}

  let Verificacion_persona2_nombre = ()=>{
    if(props.usuarios_api.persona_1){

      return props.usuarios_api.persona_2.results[0].name.first




    }




}

let Verificacion_persona2_imagen = ()=>{
  if(props.usuarios_api.persona_1){

    return props.usuarios_api.persona_2.results[0].picture.large




  }



}

let Verificacion_persona1_imagen = ()=>{
  if(props.usuarios_api.persona_1){

    return props.usuarios_api.persona_1.results[0].picture.large




  }



}




  return(
    <div className="contenedor_personas"  >


      <Card
      first={Verificacion_persona1_nombre()}
      picture={Verificacion_persona1_imagen()}
      />

      <Card
      first={Verificacion_persona2_nombre()}
      picture={Verificacion_persona2_imagen()}
      />



    </div>







  );

}



export default Lista_usuarios;
