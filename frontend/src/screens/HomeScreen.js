import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { PostComponent } from '../components/postComponents/PostComponent';
import { Recomendados } from '../components/homeComponents/recomendedComponents/RecomendedComponent';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';

export const HomeScreen = () => {
	let today = new Date();
	let comentario = {
		autor: '1',
		numero: 1,
		coment: 'Este es un comentario',
		fecha: today,
		comentarios: []
	};
	let post = {
		categoria: 'Lord of the Rings',
		fecha: today,
		titulo: 'Wait guys...',
		memeUrl: '../../../src/assets/images/lotr.jpg',
		upVotes: [ 1, 2, 3, 4, 5 ],
		downVotes: [ 6, 7 ],
		comentarios: [ comentario, comentario ]
	};

	return (
		<div className="homeContainer">
			<Grid container spacing={3}>
				<Grid item xs={4} sm={2}>
					<CategoriaComponent />
				</Grid>
				<Grid item xs={12} sm={6} className="postContainer">
					<ul>
						<li>
							<PostComponent post={post} />
						</li>
						<li>
							<PostComponent post={post} />
						</li>
						<li>
							<PostComponent post={post} />
						</li>
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
