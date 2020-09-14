import React, { useState } from "react";
import "./App.css";
import "./Style.css";
import { HomeScreen } from "./screens/HomeScreen";
import { PostScreen } from "./screens/PostScreen";
import { AddPostScreen } from "./screens/AddPostScreen";
import { UserScreen } from "./screens/UserScreen";
import { UserContext } from "./UserContext";
import NavbarComponent from "./components/navbarComponents/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <NavbarComponent
            items={[
              { name: "Inicio", url: "/" ,img:"./assets/images/logo 11 gag.png"},
              { name: "Agregar un Meme", url: "/add" },
              { name: "Mi usuario", url: "/user" },
            ]}
          />
          <Switch>
            <Route path="/add" component={AddPostScreen} />
            <Route path="/user" component={UserScreen} />
            <Route path="/post" component={PostScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

/*
        
        <Switch>
          <Route path="/add">
            <AddPostScreen />
          </Route>
          <Route path="/user">
            <UserScreen />
          </Route>
          <Route path="/SimpleModal">
            <SimpleModal />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>

        */
export default App;
