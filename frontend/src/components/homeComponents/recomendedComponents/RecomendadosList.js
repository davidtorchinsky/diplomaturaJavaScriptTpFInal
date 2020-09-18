import React from 'react';
import { Recomendado } from './RecomendedComponent';

export function RecomendadosList({ recomendados }) {
	if (recomendados) {
		console.log(recomendados);
		return (
			<div className = 'positionFixed'>
				<ul>
					{recomendados.map((recomendado) => {
						return (
							<li>
								<Recomendado recomendado={recomendado} />
							</li>
						);
					})}
				</ul>
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
