//Layout
import LayoutComentarios from "../layouts/LayoutComentarios";
import LayoutLogin from "../layouts/LayoutLogin";
import LayoutUsuarios from "../layouts/LayoutComentarios";
//import LayoutLogin from "../layouts/LayoutLogin";

//Admin Pages
import Comentarios from "../components/Comentarios";
import Login from "../components/Login";
import Usuarios from "../components/Usuarios";


const routesComentarios = [

    {
        path: "/comentarios",
        layout: LayoutComentarios,
        component: Comentarios,
    },

];

const routesLogin = [

    {
        path: "/login",
        layout: LayoutLogin,
        component: Login,
    },

];

const routesUsuarios = [

    {
        path: "/usuarios",
        layout: LayoutUsuarios,
        component: Usuarios,
    },

];



const routes = [...routesComentarios, ...routesLogin, ...routesUsuarios];

export default routes;