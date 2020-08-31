import React from 'react';
import './App.css';
import './Style.css';
import { HomeComponent } from "./components/homeComponents/HomeComponent";
import NavbarComponent from './components/navbarComponents/NavbarComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AddPost } from './components/addPostComponents/AddPost';


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent items={[{ name: "Inicio", url: "/" }, { name: "Agregar un Meme", url: "/add" }]}></NavbarComponent>
        <Switch>
          <Route path="/add" component={AddPost}></Route>
          <Route path="/" component={HomeComponent}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
