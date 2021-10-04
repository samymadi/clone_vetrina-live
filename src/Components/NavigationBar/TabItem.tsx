import {Stack,Typography,Tab} from '@mui/material';
import Icons from '../Icons';


//styles
import { stackStyle,typographyStyle,tabStyle } from './style';

const TabItem = (props:{iconName:string,text:string}) => {

    const {iconName,text} = props;
    return (
        <Tab {...props} 
             sx={tabStyle}
             label={ 
                        <Stack  direction='row' alignItems='center'
                            {...props}
                            sx={stackStyle}
                            >
                                <Icons 
                                        iconName={iconName} 
                                        fontSize='18px'/>
                                <Typography 
                                            color='primary' 
                                            sx={{...typographyStyle,textTransform:'none'}}  
                                >
                                        {text}
                                </Typography>

                        </Stack>} 
             />

    );
}

export default TabItem;
