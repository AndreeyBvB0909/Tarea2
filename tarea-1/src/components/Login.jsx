import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../imgs/logo.png";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core';
import { useState } from "react";
import "../scss/components/Login.scss";
import axios from "axios";
import swal from 'sweetalert';
import Cookies from "universal-cookie";

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
        
        const cookies = new Cookies();

        cookies.set('nombreUsuario', nombre, {path: '/'});
        cookies.set('contrasena', contra, {path: '/'});

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
      <Grid container component='main' className="root">
        <div>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <div className="ui small image">
                <img src={image} />
              </div>
              <form className="ui large form">
                <div className="ui stacked secondary segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon" />
                      <input type="text" name="email" placeholder="Usuario" onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon" />
                      <input type="password" name="password" placeholder="Clave" onChange={(e) => setContra(e.target.value)}/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui red submit button" onClick={() => InisiarSesion()}>Iniciar Sesion</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Grid>
    );
}