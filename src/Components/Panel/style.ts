import {createTheme,styled, Theme} from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import globalTheme from '../../Styles/GlobalTheme';



export const buttonStyle:SystemStyleObject<Theme>={
        textTransform:'none',
        '&:hover':{
                        backgroundColor:'white'
                  },
        padding:"0 !important"
}       




export default createTheme(globalTheme,{

})



export const DashNavBar = styled('div')(({theme})=>({
        position:'absolute',
        right:'0px',
        left:'1px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'5px 20px',
        boxShadow:"0px 1px 1px lightgrey",
        backgroundColor:'white',
        height:'40px',
        zIndex:10
        
    
}))
