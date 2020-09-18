import React from 'react';
import { Link } from 'react-router-dom';

export const PostImgComponent = ({img, url})=> {
    
    return (
        <div>
            <Link to={url}>
                <img src={require("../../assets/images/lotr.jpg")} alt="A meme" className='responsive' />
            </Link>
        </div>
    );
}