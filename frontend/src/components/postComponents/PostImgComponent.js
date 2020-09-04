import React from 'react';


export const PostImgComponent = ({url})=> {
    
    return (
        <div>
            <img src={require("../../assets/images/lotr.jpg")} alt="A meme"/>
        </div>
    );
}