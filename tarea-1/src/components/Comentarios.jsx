import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from "../imgs/logo.png";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import "../scss/components/Comentarios.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert2';

export default function Comentarios(){

  const navigate = useNavigate();

  const location = useLocation();
  const datos = location.state;
  const comenta = location.coments;

  let date = new Date();

  const [isInitialRender, setIsInitialRender] = useState(true);
  const isInitialData = true;

  useEffect(() => {
    return () => {
        axios.get('http://localhost:5000/api/v1/comentarios/obtener')
  .then(({data}) => {
          data.forEach(element => {
     
              datas.push({
                  nombre: element.usuario,
                  comentario: element.comentario,
                  fecha: element.fecha,
              })          
          })
          const newContacts = [...comentarios];
          setComentarios(newContacts);
  })
  .catch(({response}) => {
    console.log(response);
  })
    }
  },[]);


  function cerrarSesion(){
    swal.fire({
      title: '¿Estas seguro de cerrar sesion?',
      text: "Te redireccionara a la pagina de inisiar sesion",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesion'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    })
  }


  const datas = [
    {

    }
  ]

    const [comentarios, setComentarios] = useState(datas);

    //Obtener valor de las variables
    const [comentario, setComentario] = useState('');


    function postear(){

      if(comentario != ''){
        const newContactU = {
          usuario: datos.myData.name,
          comentario: comentario,
          fecha: `${date.toUTCString()}`,
        };

      const newContact = {
          nombre: datos.myData.name,
          comentario: comentario,
          fecha: `${date.toUTCString()}`,
        };

        document.getElementById("txtArea").value = "";

        axios.post('http://localhost:5000/api/v1/comentarios/postear', newContactU)
.then(({data}) => {
        localStorage.setItem('auth', "yes");
})
.catch(({response}) => {
  console.log(response.data);
})
    
        const newContacts = [...comentarios, newContact];
        setComentarios(newContacts);
      }
    }

    return (
      <Grid container component='main' className="rootC">
        <div>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
            <div className="ui middle aligned center aligned grid" id="gridC">
            <div className="column" id="columnC">
                <form className="ui large form" id="formC">
                <div className="ui stacked secondary segment" id="segmentC">
                    <div id="encabezadoC">
                    <div>
                        <img src={image} width="50px" height="50px" />
                    </div>
                    <div>
                        <h3>Bienvenido/a: {datos.myData.name}</h3>
                    </div>
                    <div>
                    <p><a onClick={() => {cerrarSesion()}}>Cerrar Sesion</a></p>
                    </div>
                    </div>
                    <div>
                    <div className="field" id="fieldC">
                        <label>Agregar Comentario</label>
                        <textarea id="txtArea" defaultValue={""} onChange={(e) => {setComentario(e.target.value)}} />
                        <div className="ui animated fade button" tabIndex={0} onClick={() => postear()}>
                        <div className="visible content">Postear</div>
                        <div className="hidden content">
                            <i className="share icon" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="scroller">
                    <table className="ui fixed inverted white table" id="">
                        <thead style={{backgroundColor: "red"}}>
                        <tr className="tr"><th >Nombre</th>
                            <th >Comentario</th>
                            <th >Fecha</th>
                        </tr></thead>
                        <tbody>
                        {React.Children.toArray(
                            comentarios.map(({ nombre, comentario, fecha }) =>(
                            <tr>
                            <td>{nombre}</td>
                            <td>{comentario}</td>
                            <td>{fecha}</td>
                        </tr>
                        ))
                        )}
                        
                        </tbody>
                    </table>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
      </Grid>
    );
}