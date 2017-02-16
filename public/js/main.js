import React from "react";
import ReactDOM from "react-dom";
import Reg from "Reg";
import Login from "Login";
import Manage from "Manage";
import Users from "Users";
import Informations from "Informations";
import Films from "Films";
import Screenings from "Screenings";
import FilmAndScreen from "FilmAndScreen";
import Show from "Show";
import Notshow from "Notshow";
import Hot from "Hot";
import {Router,Route,IndexRoute,hashHistory,BrowserHistory} from "react-router";
import Content from "Content";
import "antd/dist/antd.css"

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Content}>
    <IndexRoute component={Login}></IndexRoute>
    <Route path="/login" component={Login}></Route>
    <Route path="/reg" component={Reg}></Route>
    <Route path="/manage" component={Manage}>
        <Route path="/users" component={Users}></Route>
        <Route path="/informations" component={Informations}></Route>
        <Route path="/films" component={Films}></Route>
        <Route path="/screenings" component={Screenings}></Route>
        <Route path="/filmAndScreen" component={FilmAndScreen}></Route>
        <Route path="/show" component={Show}></Route>
        <Route path="/notshow" component={Notshow}></Route>
        <Route path="/hot" component={Hot}></Route>
    </Route>
    </Route>
    </Router>,document.getElementById("content")
);

