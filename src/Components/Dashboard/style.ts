import {createTheme,styled} from '@mui/material';
import globalTheme from '../../Styles/GlobalTheme';









export default createTheme(globalTheme,{

})



export const DashNavBar = styled('div')(({theme})=>({

    [theme.breakpoints.up('md')]:{
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        top:'0',
        left:'0',
        right:'0',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'5px 20px',
        boxShadow:"0px 1px 1px lightgrey"
    }
}))
