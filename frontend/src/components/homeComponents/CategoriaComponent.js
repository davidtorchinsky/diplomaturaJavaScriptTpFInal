import React from 'react';
import { getAllCategorias } from '../../services/PostService';
import { Button } from '@material-ui/core';

export const CategoriaComponent = ({setCategoriaClick}) => {
    let categorias = getAllCategorias();
    
    const categoriaClickHandler = (item) =>{
        setCategoriaClick(item)
    }

	return (
		<div className='categoriasContainer '>
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
