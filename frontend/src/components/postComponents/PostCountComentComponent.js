import React from 'react';
import Grid from '@material-ui/core/Grid';

import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

export const PostCountComentComponent = ({ count }) => {
	return (
		<div className="countComentContainer">
			<Grid container direction="row" justify="center" alignItems="flex-start">
				<CommentOutlinedIcon />
				<p className="countComents">{count} comentarios</p>
			</Grid>
		</div>
	);
};
