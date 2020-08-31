import React from 'react';
import { ImageUploader } from './ImageUploader';
import { CategorySelect } from './CategorySelect';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Divider, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainPage: {
        display: 'flex',
        flexDirection: 'column',
    },
    sectionTitle: {
        textAlign: 'left',
        padding: '4vh 10vw 1vh 3vw',
    },
    titleDivider: {
        backgroundColor: 'black',
        border: '1px black solid',
    },
    addForm: {
        width: '80vw',
        margin: '5vh 5vw',
        padding: '3% 5%',
        backgroundColor: '#c8dddb',
    },
    addFormTitle: {
        backgroundColor: 'white',
    },
    submit: {
        marginLeft: '50vw',
    }
}));

export const AddPost = ()=> {
    
    const classes = useStyles();
    return (
        <Container className={classes.mainPage}>
            <Typography className={classes.sectionTitle} component="h1" variant="h5">
                Crear un post
            </Typography>
            <Divider className={classes.titleDivider} />
            <Container className={classes.addForm}>
                <form>
                    <TextField className={classes.addFormTitle}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        id="titulo"
                        label="Titulo"
                        name="titulo"
                        autoFocus
                    />
                    <ImageUploader></ImageUploader>
                    <CategorySelect></CategorySelect>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Subir
                    </Button>
                </form>
            </Container>
        </Container>
    );
}