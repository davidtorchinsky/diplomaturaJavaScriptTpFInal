import React from 'react';
import './App.css';
import { HomeComponent } from "./components/homeComponents/HomeComponent";
import NavbarComponent from './components/navbarComponents/NavbarComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AddPostComponent } from './components/addPostComponents/addPostComponent';


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent items={[{ name: "Inicio", url: "/" }, { name: "Agregar un Meme", url: "/add" }]}></NavbarComponent>
        <Switch>
          <Route path="/add" component={AddPostComponent}></Route>
          <Route path="/" component={HomeComponent}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
