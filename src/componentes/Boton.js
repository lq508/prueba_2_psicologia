import React, {useEffect , useState} from 'react';
import "../css/Boton.css";
import Cargado_card from "./Cargado_card.js";
function Boton (props){

  const [cargado , setCargado] = useState(false);
  const [cargado2 , setCargado2] = useState(true);

  let Quitando_cargado_inicial=()=>{
    if(!cargado){
      setTimeout(()=>{
        setCargado(true);
    } , 2000);



    }


  }


  let Evento_Carga=()=>{
    let valor = false;

    setCargado2(valor);


    setTimeout(function(){
      valor=true;
       props.Consulta_api();

      setCargado2(valor);

    }, 2000);




  }




  /*funcion que quita la interfaz inicial  de cargado despues de un tiempo*/
  useEffect(() => {
    Quitando_cargado_inicial();
    props.Consulta_api()
  }, [])


  return(

    <>


    <div className= {cargado ? "" : "cargado"}>
        <div className= {cargado ? "" : "carga"}>


        </div>

    </div>

    <Cargado_card
    Evento_click={cargado2}

    />


    <span onClick={Evento_Carga} className="boton_consulta"> Otro </span>

      </>

  )


}

export default Boton;
