
import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Lista_usuarios from "./componentes/lista_usuarios";
import Boton from "./componentes/Boton.js" ;
function App() {

  // Hocks para usar en la interfaz
    const [usuarios , setUsuario] = useState({persona_1:null, persona_2:null});







  /* funcion que consulta la api*/


  let Consulta =  ()=>{

    let persona_1 = null;
    let persona_2 = null;



      fetch("https://randomuser.me/api").then((valor)=>{
                valor.json().then(function(valor_json){
                  persona_1=valor_json;
                });

          });


                  fetch("https://randomuser.me/api").then((valor)=>{
                            valor.json().then(function(valor_json){
                              persona_2=valor_json;

                              if(persona_1 && persona_2){
                                /* objeto donde se almacennan las personas */
                                let objeto={
                                  persona_1:persona_1,
                                  persona_2:persona_2

                                }

                                setUsuario(objeto);
                              }
                            });

                      });


    }
































  return (





    <div className="App" >





      <h1 className="titulo"> Reto Kamelia </h1>



      <Lista_usuarios

       usuarios_api={usuarios}
       Consulta_inicial={Consulta}
       />


      <Boton Consulta_api={Consulta}/>


    </div>


  );
}

export default App;
