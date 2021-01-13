import React, { useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function FilterList(props) {
    const {filterChoices, filterType} = props;
    const {AddToCompFilters, RemoveFromCompFilters, AddToTypeFilters, RemoveFromTypeFilters} = useContext(GlobalContext);

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
          newChecked.push(value);
          filterType === 'company' ? (AddToCompFilters(value)) : (AddToTypeFilters(value));
        } else {
          newChecked.splice(currentIndex, 1);
          filterType === 'company' ? (RemoveFromCompFilters(value)) : (RemoveFromTypeFilters(value));
        }
    
        setChecked(newChecked);
      };
    
    let uniqueChoices = filterChoices.filter(function(item, pos) {
      return filterChoices.indexOf(item) == pos;
    })

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    let listMarkup = uniqueChoices.map((choice, index) => (
        <ListItem key = {index} role = {undefined} dense button onClick={handleToggle(choice)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(choice) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': index }}
              />
            </ListItemIcon>
            <ListItemText primary={capitalizeFirstLetter(choice)} />
        </ListItem>
    ))
    return listMarkup;
}