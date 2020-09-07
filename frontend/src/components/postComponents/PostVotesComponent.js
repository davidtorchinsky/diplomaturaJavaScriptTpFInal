import React from 'react';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';

export const PostVotesComponent = () => {

    const upVoteHandler = () => {
        console.log("upvote")
    }

    const downVoteHandler = () => {
        console.log("downvote")
    }

	return (
		<div className="postVotes">
			<Button  onClick={upVoteHandler} >
				<ArrowUpwardIcon style={{ color: green[500] }} />
			</Button>
			<h3 className="numberVote">50</h3>
			<Button onClick={downVoteHandler}>
				<ArrowDownwardIcon style={{ color: red[500] }} />
			</Button>
		</div>
	);
};
