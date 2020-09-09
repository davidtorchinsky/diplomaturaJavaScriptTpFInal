import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { PostHeaderComponent } from './PostHeaderComponent';
import { PostImgComponent } from './PostImgComponent';
import { PostCountComentComponent } from './PostCountComentComponent';
import { PostVotesComponent } from './PostVotesComponent';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		margin: 'auto'
	}
}));
export const PostComponent = ({ post }) => {
	let votos = post.upVotes.length - post.downVotes.length;
	const classes = useStyles;
	const [ votes, setVotes ] = useState(votos);

	return (
		<div className="postContainer">
			<Paper elevation={3} className={classes.paper}>
				<Grid container direction="column" justify="flex-start" alignItems="flex-start">
					<PostHeaderComponent category={post.categoria} date={post.fecha} title={post.titulo} />
					<Grid container direction="row">
						<Grid xs={2} sm={1}>
							<PostVotesComponent votes={votes} setVotes={setVotes} />
						</Grid>
						<Grid xs={10} sm={11}>
							<PostImgComponent url={post.memeUrl} />
						</Grid>
					</Grid>
					<Button>
						<PostCountComentComponent count={20} />
					</Button>
				</Grid>
			</Paper>
		</div>
	);
};
