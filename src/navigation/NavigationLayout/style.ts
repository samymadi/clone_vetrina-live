import { Stack } from "@mui/material";
import {styled } from "@mui/system";








export const Root = styled('div')(()=>({
            position:'absolute',
            display:'flex',
            width:'100%',
            bottom:'0',
            top:'0',
}))


export const Container = styled('div')(()=>({
             padding:'0 !important',
             height:"100%",
             position:'relative',
             width:'100%'
}))


export const MainRouteContainer = styled(Stack)(()=>({
             overflowY:"scroll",
             bottom:'0',
             top:'64px',
             left:'0',
             right:'0',
             position:'absolute'   
}))