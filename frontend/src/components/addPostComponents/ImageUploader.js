import React, { useState, useEffect } from 'react';
import defaultImage from "./upload-image.png";

export const ImageUploader = (props) => {
    const [image, setImage] = useState(defaultImage);
    const mostrarImagen = (e) => {
        let files = e.target.files;
        if (files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) { 
                console.log(e.target.result);
                setImage(e.target.result);
            }
            reader.readAsDataURL(files[0]);
        }
    };
    return (
        <div className="upload-image">
            <img src={image}></img>
            <input type="file" onChange={mostrarImagen}></input>
        </div>
    );
}

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