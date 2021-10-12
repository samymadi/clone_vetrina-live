import { Button,styled } from "@mui/material";


export const  ButtonStyle  = styled(Button)(()=>({
    textTransform:'unset',
    padding:'13px 50px',
    minWidth:"140px",
    backgroundColor:'#21b8f9',
    color:'white',
    fontWeight:'bold',
    "&:hover":{
        filter: 'brightness(90%)',    
        backgroundColor:'#21b8f9'
    }
}))