import { CSSProperties } from "react"
import { Theme } from "@mui/material"
import { height, lineHeight, SxProps } from "@mui/system"

export {}





export const itemStyle = {
    minHeight:'100px'
}


export const  picStyle : CSSProperties = {
    width:'100px',
    height:'100px',
    objectFit:'cover'
}


export const  typoCatStyle:SxProps<Theme>={    
    fontWeight:'500',
    fontSize:'11px',
    lineHeight:'13px',
    marginBottom:'8px',
    marginTop:'8px',
    textTransform:'unset',
    color:'#21B8F9'
}
export const  typoTitleStyle={
    fontWeight:'500',
    fontSize:'15px',
    lineHeight:'20px',
    marginBottom:'8px'    
}
export const  typoReadTimeleStyle={
    fontWeight:'300',
    fontSize:'12px',
    lineHeight:'12px',
    textDecoration:'underline'    
}