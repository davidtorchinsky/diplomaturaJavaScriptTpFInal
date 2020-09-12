import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { PostHeaderComponent } from './PostHeaderComponent';
import { PostImgComponent } from './PostImgComponent';
import { PostCountComentComponent } from './PostCountComentComponent';
import { PostVotesComponent } from './PostVotesComponent';

const useStyles = makeStyles((theme) => ({

	paper: {
	  padding: theme.spacing(2),
	  margin: 'auto',
	 
	},
  }));
export const PostComponent = () => {
	let today = new Date();
	const classes = useStyles();

	let post = {
		category: 'Una categoria',
		date: today,
		title: 'Un titulo',
		url: '../../../src/assets/images/lotr.jpg'
	};

	return (
		<div>
			<Paper elevation={3} className={classes.paper}>
			<Grid container direction="column" justify="flex-start" alignItems="flex-start">
				<PostHeaderComponent category={post.category} date={post.date} title={post.title} />
				<Grid container direction="row" justify="flex-start" alignItems="flex-start">
					<PostVotesComponent />
					<PostImgComponent url={post.url} />
				</Grid>
				<PostCountComentComponent count={20} />
			</Grid>
			</Paper>
		</div>
	);
};
