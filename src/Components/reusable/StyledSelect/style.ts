import {styled,Select, Theme,createTheme} from '@mui/material';
import { lineHeight, SxProps } from '@mui/system';

import globalTheme from 'src/Styles/GlobalTheme';



export default createTheme(globalTheme,{
    components:{
        MuiList:{
            styleOverrides:{
                root:{
                    padding:'0 !important',
                    fontSize:'12px',
                    }
            }
        },
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    fontSize:'12px',
                    lineHeight:'25px',
                     
                    
                    },
                     
            }
        },
        Mui:{
            styleOverrides:{
                selected:{
                    backgroundColor:'red !important'
                }
            }    
        } 
    },

    
})




export const StyledSelect = styled(Select)(():any=>({

            minWidth:'150px',
            fontSize:'13px',
            fontWeight:'300',
            fontcolor:'red',
            color:'#000000de',
            padding:'0',
            cursor:'default !important',
            '& fieldset':{
                border:'none'    
            },
            ".MuiSelect-select ":{
                padding:'0'
            }
         
}))

