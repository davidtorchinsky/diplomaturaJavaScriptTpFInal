import React from 'react';
import '../../Style.css';

export const PostHeaderComponent = ({ category, date, title }) => {
	let now = new Date();
	let hoursSince = (date - now) / 1000 / 60 / 60;
	let stringTime = 'Hace '+hoursSince.toString();
	if(hoursSince < 0.01){
		stringTime = 'Hace instantes'
	}
	else if (hoursSince >= 0.1 && hoursSince < 1){
		stringTime = 'Hace 1 hora'
	}
	else if (hoursSince >= 24){
		stringTime = 'Hace más de un día'
	}


	return (
		<div>
			<p className="categoryPost">{category}</p>
			<h2 className="postTitle">{title}</h2>
			<p className="postDate">{stringTime}</p>
		</div>
	);
};
