import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"



export const toolbarStyle:SxProps<Theme> = {
    position:'relative',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    minHeight:'64px !important',
    zIndex:'10',
    borderBottom:'1px solid lightgrey'
}

export const appBarStyle={
    boxShadow:'none',
    borderBottom:'1px solid lightgrey'
}

export const buttonStyle:SxProps<Theme> = {
    textTransform:'unset',
    fontWeight:'400',
    fontSize:'16px' 
}