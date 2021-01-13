import React, { useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PriceList () {
    const [value, setValue] = React.useState('0');
    const {SetPriceFilter} = useContext(GlobalContext);
    const handleChange = (event) => {
        setValue(event.target.value);
        SetPriceFilter(event.target.value);
      };
    
    return (
        <FormControl component = 'fieldset'>
            <RadioGroup aria-label = 'price-range' name = 'price' value = {value} onChange = {handleChange}>
                <FormControlLabel value="0" control={<Radio />} label="None"/>
                <FormControlLabel value="0-100" control={<Radio />} label="$0 - $100"/>
                <FormControlLabel value="100-200" control={<Radio />} label="$100 - $200"/>
                <FormControlLabel value="200" control={<Radio />} label="$200 +"/>
            </RadioGroup>
        </FormControl>
    )
}