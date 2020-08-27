import React from 'react';
import { Grid, Paper, TextField } from '@material-ui/core';


export const AddPostComponent = ()=> {
    
    return (
        <Grid container>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                item xs={10}>
                <Paper>
                    <Grid item xs={12}>
                        <TextField id="titulo" label="Título" />
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}