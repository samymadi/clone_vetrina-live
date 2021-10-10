import {memo} from 'react';

//material ui

import { MenuItem } from '@mui/material';

//style
import {StyledTextField} from './style';

const TextFieldSelect = () => {
    return (
                <StyledTextField
                            id="outlined-select-currency"
                            select
                            helperText="Select your shop"
                            color='info'
                            >
                               
                                    
                                    <MenuItem value='select1'>
                                        Shop1
                                    </MenuItem>
                                
                                 
                              
                            
                    </StyledTextField>
    );
}

export default memo(TextFieldSelect);
