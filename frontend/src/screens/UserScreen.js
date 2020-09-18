import React, { useState, useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { UserContext } from '../UserContext';
import { PostComponent } from '../components/postComponents/PostComponent';
import { CategoriaComponent } from '../components/homeComponents/CategoriaComponent';
import { getAllFromUser, getAllPost, recomendados } from '../services/PostService';
import { RecomendadosList } from '../components/homeComponents/recomendedComponents/RecomendadosList';
import { Hidden } from '@material-ui/core';

export const UserScreen = (props) => {
  //let posts;
  let categoriaClick = props.location.state ? props.location.state.item : 'All';

  //const [categoriaClick, setCategoriaClick] = useState('All');
  const [posts, setPosts] = useState([]);
  const [postsAMostrar, setPostsAMostrar] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [widthChange, setWidthChange] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  useEffect(
    () => {
      console.log("ENTRO");
      console.log(posts);
      let filterArray = posts.filter((post) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(categoriaClick);
        console.log(post.categoria);
        console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCC");
        console.log(categoriaClick == 'All');
        return categoriaClick == 'All' || categoriaClick == post.categoria;
      });
      console.log(filterArray);
      setPostsAMostrar(filterArray);

    },
    [categoriaClick]
  );
  useEffect(
    async () => {
      let a = await getAllFromUser(user.id);
      setPosts(a);
      setPostsAMostrar(a);
      setIsLoaded(true);
      console.log("ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
      console.log(a);
      console.log(posts);
    },
    []
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
