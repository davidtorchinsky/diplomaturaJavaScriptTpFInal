import React from 'react';
import { PostComponent } from '../components/postComponents/PostComponent';
import { getPost } from '../services/PostService';
import { useParams } from 'react-router-dom';
export const PostScreen = ()=> {
    let post = getPost(useParams());
    return (
        <div>
            <PostComponent post={post}></PostComponent>
        </div>
    );
}