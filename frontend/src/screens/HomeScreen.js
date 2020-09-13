import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { PostComponent } from '../components/postComponents/PostComponent';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';
import { getAllPost } from '../services/PostService';
import { RecomendadosList } from '../components/homeComponents/recomendedComponents/RecomendadosList';
import { Hidden } from '@material-ui/core';

const recomendados = [{ titulo: "Algo", likes: '10', author: 'nakosuke', categorias: [{ nombre: 'Categoria1' }, { nombre: 'Categoria2' }] },
	{ titulo: "Otro", likes: '50', author: 'aru', categorias: [{ nombre: 'Categoria5' }] },
	{ titulo: "Y uno mas con nombre largo a ver que pasa cuando no entra en el div", likes: '50', author: 'unusuariodelapagina', categorias: [{ nombre: 'Categoria5' }, { nombre: 'Categoria10' }, {nombre: 'Categoria8'}, {nombre: 'Categoria9'}, {nombre: 'Politica y weas'}, {nombre: 'Categoria5'}, ] },
];


export const HomeScreen = () => {
	let posts = getAllPost();
	const [ categoriaClick, setCategoriaClick ] = useState('All');
	const [ postsAMostrar, setPostsAMostrar ] = useState(posts);
	const [ widthChange, setWidthChange ] = useState(false);
	const [ isMobile, setisMobile ] = useState(false);

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
			<Grid container spacing={0}>
				<Hidden xsDown>
					<Grid item xs={0} sm={2} md={2}>
						<CategoriaComponent setCategoriaClick={setCategoriaClick} />
					</Grid>
				</Hidden>
				<Grid item xs={12} sm={9}  md={6} className="postContainer">
					<ul>
						{postsAMostrar.map((post) => {
							return (
								<li key={post}>
									<PostComponent post={post}/>
								</li>
							);
						})}
					</ul>
				</Grid>
				<Hidden xsDown>
					<Grid item xs={0} sm={0}  md={4} >
						<RecomendadosList recomendados={recomendados} />
					</Grid>
				</Hidden>
			</Grid>
		</div>
	);
};
