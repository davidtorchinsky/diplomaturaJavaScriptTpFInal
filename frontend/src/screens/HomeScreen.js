import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { PostComponent } from '../components/postComponents/PostComponent';
import { Recomendados } from '../components/homeComponents/recomendedComponents/RecomendedComponent';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';
import { getAllPost } from '../services/PostService';
import { Hidden } from '@material-ui/core';

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
			<Grid container spacing={3}>
				<Hidden xsDown>
					<Grid item xs={0} sm={2}>
						<CategoriaComponent setCategoriaClick={setCategoriaClick} />
					</Grid>
				</Hidden>
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
				<Hidden xsDown>
					<Grid item xs={0} sm={3}>
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
				</Hidden>
			</Grid>
		</div>
	);
};
