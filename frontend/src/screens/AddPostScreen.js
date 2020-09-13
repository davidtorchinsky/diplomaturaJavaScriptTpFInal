import React from 'react';
import { ImageUploader } from '../components/addPostComponents/ImageUploaderComponent';
import { CategorySelect } from '../components/addPostComponents/CategorySelectComponent';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Divider, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainPage: {
		marginTop: '8vh',
		display: 'flex',
		flexDirection: 'column'
	},
	sectionTitle: {
		textAlign: 'left',
		padding: '4vh 10vw 1vh 3vw',
		width: '60vw',
		margin: '1vh 10vw'
	},
	titleDivider: {
		backgroundColor: 'black',
		border: '1px black solid',
		width: '60vw',
		margin: '0vh 10vw'
	},
	addForm: {
		width: '60vw',
		margin: '5vh 10vw',
		padding: '3% 5%',
		backgroundColor: '#c8dddb'
	},
	addFormTitle: {
		backgroundColor: 'white'
	},
	submit: {
		marginLeft: '45vw'
	}
}));

export const AddPostScreen = () => {
	const classes = useStyles();
	return (
		<Container className={classes.mainPage}>
			<Typography className={classes.sectionTitle} component="h1" variant="h5">
				Crear un post
			</Typography>
			<Divider className={classes.titleDivider} />
			<Container className={classes.addForm}>
				<form>
					<TextField
						className={classes.addFormTitle}
						variant="outlined"
						margin="normal"
						fullWidth
						required
						id="titulo"
						label="Titulo"
						name="titulo"
						autoFocus
					/>
					<ImageUploader />
					<CategorySelect />
					<Button type="submit" variant="contained" color="primary" className={classes.submit}>
						Postear
					</Button>
				</form>
			</Container>
		</Container>
	);
};
