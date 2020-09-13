import React from 'react';

export const PostComentComponent = ({ coments }) => {
	console.log(coments);
	return (
		<div>
			<ul>
				{coments.map((coment) => {
					return (
						<li key={coment.autor}>
							<p>{coment.coment}</p>
							<p>{coment.autor}</p>

						</li>
					);
				})}
			</ul>
		</div>
	);
};
