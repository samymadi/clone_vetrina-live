import {Stack,Typography,Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import Icons from '../Icons';


//styles
import { stackStyle,typographyStyle,tabStyle } from './style';

const TabItem = (props:{iconName:string,text:string}) => {

    const {iconName,text} = props;
    return (
        <Tab {...props} 
             sx={tabStyle}
             label={ <ReturnJSX {...props}/>
             }  
             />

    );
}

export default TabItem;




const ReturnJSX = (props:any)=>{
    return (
        <Link to={`/${props.text}`} style={{textDecoration:'none',width:'100%'}} >
        <Stack  direction='row' alignItems='center'
                sx={stackStyle}
                >
                    <Icons 
                            iconName={props.iconName} 
                            fontSize='18px'/>
                    <Typography 
                                color='primary' 
                                sx={{...typographyStyle,textTransform:'none'}}  
                                >
                            {props.text}
                    </Typography>

            </Stack>
        </Link> 
 
    )
}
