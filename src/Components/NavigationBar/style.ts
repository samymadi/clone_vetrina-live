import {styled,createTheme, Stack} from '@mui/material'
import globalTheme from '../../Styles/GlobalTheme'





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




export const setRootStyle =(navBarWidth:string)=>{
    return { width:navBarWidth,
        '.Mui-selected':{backgroundColor:'#F7F7F7',borderRadius:'3px','& p':{color:'#21B8F9'}}
        }
} 



const scrollBarStyle = {
    '::-webkit-scrollbar':{width:'2px'},
    '::-webkit-scrollbar-thumb':{backgroundColor:'#999999',borderRadius:'8px'}
}


export const BoxRoot = styled('div')(({theme})=>({
    position:'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    height:'100%',
    overflowY:'scroll',
    overflowX:'hidden',
    borderRight:'1px solid lightgrey',
    transition:'width 300ms ease-in',
    ...scrollBarStyle,
    [theme.breakpoints.up('md')]: {
        
      },
}))   



// export const BoxStyle (width:string)=>({})



// export const StackRoot = styled((props:StyledStackProps)=> <Stack {...props} />)(({theme})=>({

// }))








//Item Styles-------------------------------------------------------------------------

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
    marginLeft:'10px',
    paddingLeft:'5px'
}


export const typographyStyle={
    marginLeft:'10px',
    fontSize:'14px'    
}



