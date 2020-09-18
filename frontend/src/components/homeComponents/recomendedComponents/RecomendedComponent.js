import React from 'react';
import { useHistory } from 'react-router-dom';

export function Recomendado({ recomendado }) {
	let history = useHistory();
	if (recomendado) {
		const recomendadoClickHandler = (post) => {
			history.push('/post', { post });
		};

		return (
			<div className="recommended" onClick={() => recomendadoClickHandler(recomendado)}>
				<img className="thumbnail" src={require('../../../assets/images/lotr.jpg')} alt="A meme" />

				<div className="recommended-description">
					<div className="header">
						<span className="title">{recomendado.titulo}</span>
						<span className="likes">{recomendado.likes}</span>
					</div>
					<p className="author">{`by @${recomendado.author}`}</p>
					{/*    <p className="category">{recomendado.categorias.map((elem) => {
                        return ` ${elem.nombre}`;
                    })}</p> */}
					<p className="category">{recomendado.categoria}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<p>No hay recomendados disponibles.</p>
			</div>
		);
	}
}
