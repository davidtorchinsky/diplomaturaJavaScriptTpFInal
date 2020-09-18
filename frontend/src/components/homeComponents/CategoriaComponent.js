import React from 'react';
import { getAllCategorias } from '../../services/PostService';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export const CategoriaComponent = ({setCategoriaClick}) => {
    let categorias = getAllCategorias();
	let history = useHistory();
    const categoriaClickHandler = (item) =>{
		history.push("/",{item})
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
