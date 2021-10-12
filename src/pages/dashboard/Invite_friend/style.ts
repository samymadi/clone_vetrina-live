import {SxProps,Theme } from "@mui/system"






export const typoStyle:SxProps<Theme> ={
    marginTop:'15px',
    marginBottom:'40px',
    lineHeight:'22px', 
    "&::before":{
        content:'"Receive 50 products "',
        color:'#00C48C',
        fontWeight:'bold'
    }
}