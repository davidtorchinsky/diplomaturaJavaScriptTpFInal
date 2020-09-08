import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { PostComponent } from '../components/postComponents/PostComponent';
import { Recomendados } from '../components/homeComponents/recomendedComponents/RecomendedComponent';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';
import { getAllPost } from '../services/PostService';

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
					<ul>
						<li>
							<Recomendados />
						</li>
						<li>
							<Recomendados />
						</li>
						<li>
							<Recomendados />
						</li>
						<li>
							<Recomendados />
						</li>
					</ul>
				</Grid>
			</Grid>
		</div>
	);
};
