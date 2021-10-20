
import { styled,Stack } from "@mui/material";




export const Root = styled(Stack)(({theme})=>({
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'0 5%',
        background:`linear-gradient(${theme.palette.info.main} 0%, rgba(33, 184, 249, 0) 132%)`,
        height:'182px',
        '& > h6, & > a':{
                marginTop:'-70px'
        }
}))


export const redirectionStyleButton = {
        fontWeight:'600',
        fontSize:'20px'
}
