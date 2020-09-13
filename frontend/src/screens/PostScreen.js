import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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

	const [input, setInput] = useState('');
	let post = props.location.state.post;

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			console.log(input)
		}
	}

	const onChangeTextHandler = (event) => {
		setInput(event.target.value)
	}

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
			<TextField id="outlined-basic" label="Comentar" variant="outlined"
				style={{ margin: 8, width: '120vh' }}
				margin="normal"
				onKeyDown={handleKeyDown}
				onChange={(e) => onChangeTextHandler(e)}
			/>

			<PostComentComponent coments={post.comentarios} />
		</div>
	);
};
