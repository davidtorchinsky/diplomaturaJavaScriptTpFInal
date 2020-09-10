import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { PostComponent } from '../components/postComponents/PostComponent';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';
import { getAllPost } from '../services/PostService';
import { RecomendadosList } from '../components/homeComponents/recomendedComponents/RecomendadosList';


const recomendados = [{ titulo: "Algo", likes: '10', author: 'nakosuke', categorias: [{ nombre: 'Categoria1' }, { nombre: 'Categoria2' }] },
	{ titulo: "Otro", likes: '50', author: 'aru', categorias: [{ nombre: 'Categoria5' }] },
	{ titulo: "Y uno mas con nombre largo a ver que pasa cuando no entra en el div", likes: '50', author: 'unusuariodelapagina', categorias: [{ nombre: 'Categoria5' }, { nombre: 'Categoria10' }, {nombre: 'Categoria8'}, {nombre: 'Categoria9'}, {nombre: 'Politica y weas'}, {nombre: 'Categoria5'}, ] },
];

export const HomeScreen = () => {
	let posts = getAllPost();

	const [ categoriaClick, setCategoriaClick ] = useState('All');
	const [ postsAMostrar, setPostsAMostrar ] = useState(posts);

	useEffect(
		() => {
			let filterArray = posts.filter((post) => {
				return categoriaClick == 'All' || categoriaClick == post.categoria;
			});
			setPostsAMostrar(filterArray);
		},
		[ categoriaClick ]
	);

	return (
		<div className="homeContainer">
			<Grid container spacing={3}>
				<Grid item xs={4} sm={2}>
					<CategoriaComponent setCategoriaClick={setCategoriaClick} />
				</Grid>
				<Grid item xs={12} sm={6} className="postContainer">
					<ul>
						{postsAMostrar.map((post) => {
							return (
								<li key={post}>
									<PostComponent post={post} />
								</li>
							);
						})}
					</ul>
				</Grid>
				<Grid item xs={4} sm={3}>
					<RecomendadosList recomendados={recomendados}/>
				</Grid>
			</Grid>
		</div>
	);
};
