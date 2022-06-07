//Layout
import LayoutComentarios from "../layouts/LayoutComentarios";
import LayoutLogin from "../layouts/LayoutLogin";
//import LayoutLogin from "../layouts/LayoutLogin";

//Admin Pages
import Comentarios from "../components/Comentarios";
import Login from "../components/Login";


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


const routes = [...routesComentarios, ...routesLogin];

export default routes;