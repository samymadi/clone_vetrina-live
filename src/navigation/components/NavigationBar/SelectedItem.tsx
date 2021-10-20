import {Stack,Typography,Tooltip} from '@mui/material';
import { NavBarItem } from 'src/assets/static/staticData';
import { stackStyle,typographyStyle,linkStyle } from './style';

//custom components imports 
import { CustomSvg } from 'src/components/reusable'; 



const SelectedItem = ({icon,text}:NavBarItem) => {
    
    return (
        <Stack  direction='row' 
                    alignItems='center'
                    sx={stackStyle}
                    >
                            <CustomSvg 
                                    color='#103B66'  
                                    icon={<Tooltip 
                                            title={text}
                                            placement='top'
                                            arrow
                                            >{icon}</Tooltip>}
                                        />
                
                                
                            <Typography variant='h6'
                                        color='primary' 
                                        sx={typographyStyle} 
                                        >
                                    {text}
                            </Typography>

                </Stack>
    );
}

export default SelectedItem;
