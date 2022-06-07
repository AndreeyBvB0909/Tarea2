import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../imgs/logo.png";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core';
import { useState } from "react";
import "../scss/components/Usuarios.scss";
import axios from "axios";
import swal from 'sweetalert';

export default function Login(){

  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');

  const [contra, setContra] = useState('');

  const myData = {
    name: nombre
  }

  function InisiarSesion() {

    if(nombre != '' && contra != ''){
      axios.get('http://localhost:5000/api/v1/login/'+nombre+'/'+contra)
    .then(({data}) => {
      if(data.length == 0){

        swal({
          title: "Lo sentimos",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          button: "Aceptar"
      });

      }else{
        
        navigate("/comentarios", {state:{myData}, coments: {data}});
      }
    })
    .catch(({response}) => {
      console.log(response);
    })
    }else{
      setTimeout(() => {
        swal({
            title: "",
            text: "Faltan campos por ingresar",
            icon: "info",
            button: "Aceptar"
        });
    })
    }
    
  }
    return (
      <Grid container component='main' className="rootS">
        <div>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
          <div className="ui middle aligned center aligned grid" id="gridS">
          <div className="column" id="columnS">
              
              <div>
              <form className="ui large form" id="formS">
              <div class="ui animated button" tabindex="0">
                <div class="visible content">Agregar Usuarios</div>
                <div class="hidden content">
                  <i class="user plus icon"></i>
                </div>
                </div>
              <div className="scroller">
                  <table class="ui fixed table" id="tableS">
                  <thead>
                    <tr><th>Nombre</th>
                    <th>Contrasena</th>
                    <th>Accion</th>
                  </tr></thead>
                  <tbody>
                    <tr>
                      <td data-label="Nombre">James</td>
                      <td data-label="Contrasena">24</td>
                      <td data-label="Accion">
                      <button class="ui button">
                          Modificar
                      </button>
                      <button class="ui button">
                          Eliminar
                      </button>
                      </td>
                    </tr>
                    <tr>
                      
                    </tr>
                    <tr>
                    
                    </tr>
                  </tbody>
                </table>
                </div>
              </form>
              </div>
              <div id="volver">
                <button class="ui button">
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    );
}