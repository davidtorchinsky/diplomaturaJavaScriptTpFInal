import React from 'react';


export function Recomendado({recomendado}) {
    if (recomendado) {
        console.log(recomendado);
        return (
            <div className="recommended">
                <img className="thumbnail" src={require("../../../assets/images/lotr.jpg")} alt="A meme" />

                <div className="recommended-description">
                    <div className="header">
                        <span className="title">{recomendado.titulo}</span>
                        <span className="likes">{recomendado.likes}</span>
                    </div>
                    <p className="author">{`by @${recomendado.author}`}</p>
                    <p className="category">{recomendado.categorias.map((elem) => {
                        return ` ${elem.nombre}`;
                    })}</p>
                </div>
            </div>
        ); 
    } else {
        return (
            <div><p>No hay recomendados disponibles.</p></div>
        );
    }
    
}