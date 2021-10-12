import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import {CSSProperties} from 'react';




export const linkStyle= {
    marginRight:'5px',
    width:'160px',
    height:'160px',
    color:'unset',
    textDecoration:'none'
}

export const imgStyle:CSSProperties ={
    userSelect:'none',
    borderRadius:'10px',
    width:'160px',
    height:'160px'
}


export const boxRootStyle:SxProps<Theme>={
    position:'relative'
}

export const boxChildStyle:SxProps<Theme>={
    backgroundColor:'transparent',
    zIndex:30,
    position:'absolute',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0'
}   