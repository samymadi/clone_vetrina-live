//Types
import { SxProps, Theme, styled, height } from "@mui/system"
import { createTheme } from "@mui/material"
import globalTheme from "src/Styles/GlobalTheme"



const scrollBarStyle = {
    '::-webkit-scrollbar':{width:'3px'},
    '::-webkit-scrollbar-thumb':{backgroundColor:'#999999',borderRadius:'8px'}
}


export default createTheme(globalTheme,{
    components:{
        MuiTabs:{
            styleOverrides:{

                indicator:{
                    width:'3px',
                    left:'0 !important',
                    backgroundColor:'#21B8F9',
                    borderRadius:'8px',
                },
                root:{
                    minWidth:'fit-content',
                },
                

            }
        },

       
    }
})








export const  styledDrawer = (width:string):SxProps<Theme>=>{
    
    
    return { 
             position:'relative',
             transition:'width 300ms ease',
             width,
             flexShrink: 0,
             
             '& .MuiDrawer-paper': {
                width,
                boxSizing: 'border-box',
                backgroundColor:'transparent',
                transition:'inherit',
                // paddingRight:'3px'
             }
    }
}




export const ContainerRoot = styled('div')(()=>({
 
    height:'100%',
    overflowY:'scroll',
    overflowX:'hidden',
    '.Mui-selected':{backgroundColor:'#f2f2f2',borderRadius:'3px',color:'red !important','& h6':{color:'#21B8F9'},"& svg":{color:'#21B8F9 !important'}},
    '.MuiTab-root:hover':{
        "& svg":{
            color:'#21B8F9 !important'
        },
        "& h6":{
            color:"#21B8F9 !important"
        }
    },
    
    ...scrollBarStyle,
}))   




export const setRootStyle =(navBarWidth:string)=>{
    return { width:navBarWidth,
        '.Mui-selected':{backgroundColor:'#F7F7F7',borderRadius:'3px','& p':{color:'#21B8F9'}}
        }
} 


export const tabStyle = {
    padding:'5px 0',
    marginLeft:'7px',
    minHeight:"32px",
    marginBottom:'3px'
}







//---------------------------------SelectedItem--------------------------

export const linkStyle= {
    textDecoration:'none',
    width:'100%',
}



export const stackStyle = {
    minHeight:"20px",
    height:"35px",
    width:'100%',
    borderLeft:'3px solid transparent',
    paddingLeft:'5px'
}


export const typographyStyle:SxProps<Theme>={
    marginLeft:'20px',
    fontSize:'16px',
    fontWeight:"400",
    textTransform:'none'
}



// --------------------------------ExtendItem-----------------------------

export const accordionDetailsStyle={
    backgroundColor:'#E9F8FE',
    padding:'0',
    
}        

export const accordionSummaryStyle={
            minHeight:'32px !important',
            height:'35px',
            padding:'0',
            maxHeight:'35px',
            paddingRight:'10px'
}
export const accordionStyle={
            boxShadow:'none',
            width:'100%',
           
}


export const  listStyle={
    backgroundColor:'#E9F8FE'
}



// -------------------------------SubTitles-----------------------------



export const linkStyleSubTitles= {
    textDecoration:'none',
    color:'unset'
}

export const listItemStyle = {
    padding:'6px 16px',
    paddingLeft:'40px'
}

export const  typoSubTitleStyle:SxProps<Theme>= {
    fontSize:"13px !important",
    textTransform:'none'
}



//----------------------------------Footer---------------------------------



export const typoDateStyle = {
    width:'80%',
    margin:'50px auto 25px auto'
}

