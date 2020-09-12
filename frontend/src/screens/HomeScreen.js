import React from "react";
import Grid from "@material-ui/core/Grid";
import SimpleModal from "./SimpleModal";

import { PostComponent } from "../components/postComponents/PostComponent";

export const HomeScreen = () => {
  return (
    <div className="homeContainer">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <p>Categorias</p>
        </Grid>
        <Grid item xs={12} sm={6} className="postContainer">
          <PostComponent></PostComponent>
        </Grid>
        <Grid item xs={6} sm={3}>
          <p>Top post</p>
        </Grid>
      </Grid>
    </div>
  );
};
