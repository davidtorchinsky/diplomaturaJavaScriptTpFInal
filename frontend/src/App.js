import React from 'react';
import './App.css';
import './Style.css';
import { HomeScreen } from './screens/HomeScreen';
import { AddPostScreen } from './screens/AddPostScreen';
import { UserScreen } from './screens/UserScreen';

import NavbarComponent from './components/navbarComponents/NavbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Style.css";

function App() {
	
	return (
		<Router>
			<div className="App">
				<NavbarComponent
					items={[
						{ name: 'Inicio', url: '/' },
						{ name: 'Agregar un Meme', url: '/add' },
						{ name: 'Mi usuario', url: '/user' }
					]}
				/>
				<Switch>
					<Route path="/add" component={AddPostScreen} />
					<Route path="/" component={HomeScreen} />
					<Route path="/user" component={UserScreen} />
				</Switch>
			</div>
			
		</Router>
	);
}

export default App;
