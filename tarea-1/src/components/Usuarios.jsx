import React from "react";
import { useNavigate, Link } from "react-router-dom";
import image from "../imgs/logo.png";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core';
import { useState, useEffect } from "react";
import "../scss/components/Usuarios.scss";
import axios from "axios";
import swal from 'sweetalert2';

export default function Login(props){

  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');

  const [contra, setContra] = useState('');

  const datos = [
    {
      
    }
  ]

  const [comentarios, setComentarios] = useState(datos);

  useEffect(() => {
    return () => {
      actualizarTabla();
    }
  },[]);

  async function actualizarUsuario(id, nombre, contrasena){

    swal.fire({
      title: 'Actualizar Usuario',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
      <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
      confirmButtonText: 'Actualizar',
      focusConfirm: false,
      preConfirm: () => {
        const login = swal.getPopup().querySelector('#login').value
        const password = swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          swal.showValidationMessage(`Faltan datos por ingresar`)
        }else{
          (async () => {

            const newContact = {
              id: id,
              nombre: login,
              contrasena: password
            };
      
            const resp = await axios.put('http://localhost:5000/api/v1/usuarios/actualizar/', newContact)
              .then(response => this.setState({ updatedAt: response.data.updatedAt }));
           })();
        }
      }
    }).then((result) => {

      swal.fire(
        '',
        'Usuario actualizado con exito',
        'success'
      ).then((result) => {
        window.location.reload();
      })
    })
  }

  async function eliminarUsuario(idE){
    swal.fire({
      title: '¿Seguro que deseas eliminar el usuario?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        const newContact = {
          id: idE
        };

        axios.delete('http://localhost:5000/api/v1/usuarios/eliminar/'+idE, newContact)
              .then(response => console.log("usuario eliminado"));

        swal.fire('Usuario eliminado con exito', '', 'success').then((result) => {
          window.location.reload();
        })
      }
    })
  }

  async function actualizarTabla(){

    (async () => {
     const act = await axios.get('http://localhost:5000/api/v1/obtener')
      .then(({data}) => {
              data.forEach(element => {
                datos.push({
                  id: element.id,
                  nombre: element.nombre,
                  contrasena: element.contrasena,
                  editar: <div><button className='button-37' onClick={() => actualizarUsuario(element.id, element.nombre, element.contrasena)}>Actualizar</button> <button className='button-37' onClick={() => eliminarUsuario(element.id)}>Eliminar</button></div>,
                  })          
              })
              const newContacts = [...comentarios];
              setComentarios(newContacts);
      })
      .catch(({response}) => {
        console.log(response);
      })
    })();

  }

  async function crearUsuario(){

    
      swal.fire({
        title: 'Nuevo Usuario',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Registrar',
        focusConfirm: false,
        preConfirm: () => {
          const login = swal.getPopup().querySelector('#login').value
          const password = swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            swal.showValidationMessage(`Faltan datos por ingresar`)
          }else{

            (async () => {
              
              const newContact = {
                nombre: login,
                contrasena: password
              };
  
              const response = await axios.post('http://localhost:5000/api/v1/usuarios/crear/', newContact)
             .then(({data}) => {
              localStorage.setItem('auth', "yes");
               })
                 .catch(({response}) => {
                console.log(response.data);
               })

            })();  
          }
        }
      }).then((result) => {

        window.location.reload();

        swal.fire(
          '',
          'Usuario registrado con exito',
          'success'
        )
      })
  
  }

  


    return (
      <Grid container component='main' className="rootS">
        <div>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
          <div className="ui middle aligned center aligned grid" id="gridS">
          <div className="column" id="columnS">
              
              <div>
              <div className="ui large form" id="formS">
              <div className="ui animated button" tabIndex="0" onClick={()=>crearUsuario()}>
                <div className="visible content">Agregar Usuarios</div>
                <div className="hidden content">
                  <i className="user plus icon"></i>
                </div>
                </div>
              <div className="scroller">
                  <table className="ui fixed table" id="tableS">
                  <thead>
                    <tr><th>Nombre</th>
                    <th>Contrasena</th>
                    <th>Accion</th>
                  </tr></thead>
                  <tbody>
                  {React.Children.toArray(
                            comentarios.map(({ nombre, contrasena, editar }) =>(
                            <tr>
                            <td>{nombre}</td>
                            <td>{contrasena}</td>
                            <td>{editar}</td>
                        </tr>
                        ))
                        )}
                  </tbody>
                </table>
                </div>
              </div>
              </div>
              <div id="volver">
                <button className="ui button" onClick={() => navigate("/comentarios")}>
                Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    );
}