import {memo} from 'react';

//material ui 
import {Select,MenuItem} from '@mui/material'



//style
import { StyledSelect } from './style';

const index = () => {
    return (
        <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={10}
           
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </StyledSelect>
    );
}

export default memo(index);
