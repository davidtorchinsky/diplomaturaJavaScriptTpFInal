import React, { useState, useEffect } from 'react';
import defaultImage from '../../assets/images/upload-image.png';

export const ImageUploader = (props) => {
	const [ image, setImage ] = useState(defaultImage);
	const mostrarImagen = (e) => {
		let files = e.target.files;
		if (files[0]) {
			const reader = new FileReader();
			reader.onload = function(e) {
				console.log(e.target.result);
				setImage(e.target.result);
			};
			reader.readAsDataURL(files[0]);
		}
	};
	return (
		<div className="upload-image">
			<img src={image} />
			<label htmlFor="filePicker" style={{ background: '#3f51b5', padding: '5px 10px' ,borderRadius:'5px', color:'white' }}>
				Seleccionar desde tu ordenador
			</label>
			<input id="filePicker" style={{ visibility: 'hidden' }} type={'file'}  onChange={mostrarImagen} />
			
		</div>
	);
};



/*if (image == "") {
        return (
            <div>
                <input type="file" onChange={mostrarImagen}></input>
            </div>
        );
    } else {
        return (
            <div>
                <img src={image}></img>
                <input type="file" onChange={mostrarImagen}></input>
            </div>
        );
    }*/
