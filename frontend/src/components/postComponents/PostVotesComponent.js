import React from 'react';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

export const PostVotesComponent = ()=> {
    
    return (
        <div className='postVotes'>
         <ArrowUpwardIcon style={{ color: green[500] }} />
            <h3 class='numberVote'>50</h3>
            <ArrowDownwardIcon style={{ color: red[500] }} />
        </div>
    );
}