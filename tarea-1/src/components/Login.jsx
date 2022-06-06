import React from "react";
import image from "../imgs/logo.png";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import "../scss/components/Login.scss";

export default function Login(){
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
                      <input type="text" name="email" placeholder="Usuario" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon" />
                      <input type="password" name="password" placeholder="Clave" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui red submit button">Iniciar Sesion</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Grid>
    );
}