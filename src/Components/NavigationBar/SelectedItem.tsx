import {Stack,Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { NavBarItem } from 'src/assets/static/staticData';
import { stackStyle,typographyStyle,linkStyle } from './style';
import Icons from '../Icons';



const SelectedItem = ({iconName,text}:NavBarItem) => {
    
    return (
        <Link to={`/${text}`} style={linkStyle} >
            <Stack  direction='row' alignItems='center'
                    sx={stackStyle}
                    >
                        <Icons 
                                iconName={iconName} 
                                fontSize='18px'/>
                        <Typography 
                                    color='primary' 
                                    sx={typographyStyle} 
                                    >
                                {text}
                        </Typography>

                </Stack>
         </Link> 
    );
}

export default SelectedItem;
