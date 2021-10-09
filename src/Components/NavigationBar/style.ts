//Types
import { SxProps, Theme, styled } from "@mui/system"
import { createTheme } from "@mui/material"
import globalTheme from "src/Styles/GlobalTheme"



const scrollBarStyle = {
    '::-webkit-scrollbar':{width:'2px',display:'none'},
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
                    borderRadius:'8px'
                },
                root:{
                    minWidth:'fit-content',
                },
                

            }
        },

        MuiTab:{
            styleOverrides:{
                    root:{
                        '&selected':{
                            backgroundColor:'red'
                        },
                        selected:{
                            backgroundColor:'red'

                        }
                    },
                    'Mui-selected':{
                        backgroundColor:'#F7F7F7',
                        borderRadius:'3px',
                        color:'red',
                        fontSize:'30px'
                    }
                 
            }
        }
    }
})








export const  styledDrawer = (width:string):SxProps<Theme>=>{
    
    
    return { 
             position:'relative',
             transition:'width 300ms ease-in',
             width,
             flexShrink: 0,
             
             '& .MuiDrawer-paper': {
                width,
                boxSizing: 'border-box',
                backgroundColor:'transparent',
                transition:'inherit',
                paddingRight:'3px'
             }
    }
}




export const ContainerRoot = styled('div')(()=>({
 
    height:'100%',
    overflowY:'scroll',
    overflowX:'hidden',
    '.Mui-selected':{backgroundColor:'#f2f2f2',borderRadius:'3px','& p':{color:'#21B8F9'}},

    
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
}


export const stackStyle = {
    minHeight:"20px",
    height:"20px",
    width:'100%',
    borderLeft:'3px solid transparent',
    paddingLeft:'5px'
}


export const typographyStyle={
    marginLeft:'15px',
    fontSize:'14px'    
}
