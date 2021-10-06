import { Theme } from "@mui/material"
import { SystemStyleObject } from "@mui/system"


const scrollBarStyle = {
    '::-webkit-scrollbar':{width:'4px'},
    '::-webkit-scrollbar-thumb':{backgroundColor:'lightgrey'}
}



export const containerStackStyle:SystemStyleObject<Theme> ={
    position:'absolute',
    right:'0',
    bottom:'0',
    top:'0',
    transition:'left 300ms ease-in'
}

export const stackContentStyle :SystemStyleObject<Theme>  = {
    position:'absolute',
    bottom:'0',
    overflowY:'scroll',
    top:'45px',
    left:'0',
    right:'0',
    ...scrollBarStyle

}






