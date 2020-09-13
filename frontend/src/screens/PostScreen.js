import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import { PostHeaderComponent } from '../components/postComponents/PostHeaderComponent';
import { PostImgComponent } from '../components/postComponents/PostImgComponent';
import { PostComentComponent } from '../components/postComponents/comentComponents/PostComentComponent';
import { recomendados } from '../services/PostService';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';
import { RecomendadosList } from '../components/homeComponents/recomendedComponents/RecomendadosList';
import { PostComponent } from '../components/postComponents/PostComponent';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		margin: 'auto'
	}
}));

export const PostScreen = (props) => {
	const classes = useStyles;
	
	let post = props.location.state.post;

	return (
		<div className="homeContainer">
			<Grid container spacing={0}>
				<Hidden xsDown>
					<Grid item xs={0} sm={2} md={2}>
						<CategoriaComponent />
					</Grid>
				</Hidden>
				<Grid item xs={12} sm={9} md={6} className="postContainer">
					<ul>
						<li>
							<PostComponent post={post} />
						</li>
					</ul>
				</Grid>
				<Hidden xsDown>
					<Grid item xs={0} sm={0} md={4}>
						<RecomendadosList recomendados={recomendados()} />
					</Grid>
				</Hidden>
			</Grid>
			<PostComentComponent coments={post.comentarios} />
		</div>
	);
};
