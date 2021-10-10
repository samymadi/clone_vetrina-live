import {styled,Select, Theme} from '@mui/material';
import { SxProps } from '@mui/system';






export const StyledSelect = styled(Select)(():any=>({

            minWidth:'150px',
            fontSize:'13px',
            fontWeight:'300',
            fontcolor:'red',
            color:'#000000de',
            '& fieldset':{
                border:'none'    
            }
}))