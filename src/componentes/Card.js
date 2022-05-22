import React from "react";
import "../css/Card.css";

function Card(props){

  return(

    <div className="card_usuario">

    <img src={props.picture}/>
        <h3 className="nombre_usuario">  {props.first} </h3>

    </div>


  );




}


export default Card;
