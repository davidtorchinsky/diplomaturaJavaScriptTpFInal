import React from 'react';
import "../../Style.css";

export const PostHeaderComponent = ({ category, date, title }) => {
	return (
		<div>
		
			<p className ='categoryPost'>{category}</p>
			<h2 className='postTitle'>{title}</h2>
			<p className= 'postDate'>12/08/2020 15:33</p>
		</div>
	);
};
