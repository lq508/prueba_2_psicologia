import React from "react";
import "../css/Cargado.css";


function Cargado_card(props){

  return(
    <div className= {props.Evento_click ? "" : "cargado"}>
        <div className= {props.Evento_click ? "" : "carga"}>


        </div>

    </div>




  )

}


export default Cargado_card;
