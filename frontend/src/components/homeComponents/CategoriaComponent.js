import React from 'react';
import { getAllCategorias } from '../../services/PostService';
import { Button } from '@material-ui/core';

export const CategoriaComponent = () => {
    let categorias = getAllCategorias();
    
    const categoriaClickHandler = (item) =>{
        console.log(item)
    }

	return (
		<div className='categoriasContainer positionFixed'>
			<ul>
				{categorias.map((item) => {
					return (
                        <li key={item}>
						<Button onClick={()=>categoriaClickHandler(item)}>
							
							{item}
						</Button>
                        </li>
					);
				})}
			</ul>
		</div>
	);
};
