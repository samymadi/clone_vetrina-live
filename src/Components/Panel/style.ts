import {createTheme,styled} from '@mui/material';
import globalTheme from '../../Styles/GlobalTheme';









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
