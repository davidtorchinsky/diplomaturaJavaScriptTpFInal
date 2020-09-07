import React from 'react';


export function Recomendados() {
    return (
        <div className="recommended">
              <img  className="thumbnail" src={require("../../../assets/images/lotr.jpg")} alt="A meme"/>
           
            <div className="recommended-description">
                <div className="header">
                    <span className="title">Titulo del meme</span>
                    <span className="likes">5</span>
                </div>
                <p className="author">by @nakosuke</p>
                <p className="category">Categoria1, Categoria2,</p>
            </div>
        </div>
    );
}