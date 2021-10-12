import {styled,Card} from '@mui/material';






export const StyledAddCard = styled(Card)(()=>({
                    minHeight:'120px',
                    minWidth:'250px',
                    padding:"10px 25px",
                    paddingTop:'20px',
                    borderRadius:'8px',
                    boxShadow:'0px 4px 6px #dfdfdf',
                    margin:'0',
                    ".MuiCardHeader-root":{
                        padding:'0'
                    },
                    ".MuiCardContent-root":{
                        padding:'16px 0px',

                    },
                    ".MuiCardActions-root":{
                        padding:'0'
                    }
}))