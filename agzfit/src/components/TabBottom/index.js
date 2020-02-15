import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import ListAlt from '@material-ui/icons/ListAlt';
import List from '@material-ui/icons/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        width: 500,
        position: "absolute",
        bottom: 0
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Tarefas" value="Tafefas" icon={<ListAlt />} />
            <BottomNavigationAction label="Feed" value="Feed" icon={<DynamicFeed />} />
            <BottomNavigationAction label="Ranking" value="Ranking" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Regras" value="Regras" icon={<List />} />
        </BottomNavigation>
    );
}
