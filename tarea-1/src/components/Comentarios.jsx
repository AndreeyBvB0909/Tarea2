import React from "react";
import image from "../imgs/logo.png";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import "../scss/components/Comentarios.scss";


export default function Comentarios(){
    return (
      <Grid container component='main' className="root">
        <div>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
            <div className="ui middle aligned center aligned grid">
            <div className="column">
                <form className="ui large form">
                <div className="ui stacked secondary segment">
                    <div id="encabezado">
                    <div>
                        <img src={image} width="50px" height="50px" />
                    </div>
                    <div>
                        <h3>Bienvenido/a: </h3>
                    </div>
                    <div>
                        <a href="../src/index.html">Cerrar Sesion</a>
                    </div>
                    </div>
                    <div>
                    <div className="field">
                        <label>Agregar Comentario</label>
                        <textarea defaultValue={""} />
                        <div className="ui animated fade button" tabIndex={0}>
                        <div className="visible content">Postear</div>
                        <div className="hidden content">
                            <i className="share icon" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <table className="ui celled table">
                        <thead>
                        <tr><th>Nombre</th>
                            <th>Comentario</th>
                            <th>Fecha</th>
                        </tr></thead>
                        <tbody>
                        <tr>
                            <td data-label="Nombre" />
                            <td data-label="Comentario" />
                            <td data-label="Fecha" />
                        </tr>
                        <tr>
                            <td data-label="Nombre" />
                            <td data-label="Comentario" />
                            <td data-label="Fecha" />
                        </tr>
                        <tr>
                            <td data-label="Nombre" />
                            <td data-label="Comentario" />
                            <td data-label="Fecha" />
                        </tr>
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