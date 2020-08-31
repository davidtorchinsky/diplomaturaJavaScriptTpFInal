import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { Container, Box} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    categorySelect: {
        backgroundColor: 'white',
        width: '20vw',
    },
    category: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        justifyContent: 'flex-start',
    }
}));


const names = [
    'Anime',
    'Politica',
    'Trending',
    'Varios',
    'Hombres',
    'Mujeres',
    'TikTok',
];



export  function CategorySelect() {
    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    return (
        <Container className={classes.category}>
            <Box textAlign="left">
                <InputLabel id="category-label">Categoría</InputLabel>
                <Select className={classes.categorySelect}
                    required
                    labelId="category-label"
                    id="category"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                    </Select>
            </Box>
        </Container>
    );
}