import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { PostComponent } from '../components/postComponents/PostComponent';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';
import { getAllPost, recomendados } from '../services/PostService';
import { RecomendadosList } from '../components/homeComponents/recomendedComponents/RecomendadosList';
import { Hidden } from '@material-ui/core';

export const UserScreen = (props) => {
  let posts = getAllPost();
  let categoriaClick = props.location.state ? props.location.state.item : 'All';
  console.log('categoria: ', categoriaClick);

  //const [ categoriaClick, setCategoriaClick ] = useState(props.location.state.item);
  const [postsAMostrar, setPostsAMostrar] = useState(posts);
  const [widthChange, setWidthChange] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  useEffect(
    () => {
      let filterArray = posts.filter((post) => {
        return categoriaClick == 'All' || categoriaClick == post.categoria;
      });
      setPostsAMostrar(filterArray);
    },
    [categoriaClick]
  );

  return (
    <div className="homeContainer">
      <Grid container spacing={0}>
        <Hidden xsDown>
          <Grid item xs={0} sm={2} md={2}>
            <CategoriaComponent />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={6} className="postContainer">
          <ul>
            {postsAMostrar.map((post) => {
              return (
                <li key={post}>
                  <PostComponent post={post} />
                </li>
              );
            })}
          </ul>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={0} sm={0} md={4}>
            <RecomendadosList recomendados={recomendados()} />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
