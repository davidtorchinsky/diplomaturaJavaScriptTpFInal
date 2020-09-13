import React from 'react';
import './App.css';
import './Style.css';
import { HomeScreen } from './screens/HomeScreen';
import { AddPostScreen } from './screens/AddPostScreen';
import { UserScreen } from './screens/UserScreen';
import { PostScreen } from './screens/PostScreen';

import NavbarComponent from './components/navbarComponents/NavbarComponent';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import "./Style.css";

function App() {
	
	return (
		<Router >
			<div className="App">
				<NavbarComponent
					items={[
						{ name: 'Inicio', url: '/' },
						{ name: 'Agregar un Meme', url: '/add' },
						{ name: 'Mi usuario', url: '/user' },
						{ name: 'Random Post', url: '/post' }
					]}
				/>
				<div>
					<Switch>
						<Route path="/add" component={AddPostScreen} />
						<Route path="/post" component={PostScreen} />
						<Route path="/user" component={UserScreen} />
						<Route path="/:id" component={PostScreen}/>
						<Route path="/" component={HomeScreen} />
					</Switch>
				</div>
			</div>
			
		</Router>
	);
}

export default App;
