
import { Card,CardHeader,CardContent,CardActions } from '@mui/material';
import {memo} from 'react';


//components 
import { StyledLink } from 'src/components/reusable';
import AdCard from 'src/components/reusable/AdCard';

import { Typography } from '@mui/material';

//assets
import {ReactComponent  as Logo} from '../../../../assets/Logo/logo-white-trustpilot 1.svg';

// style

import { cardStyle,greenColor } from './style'; 

const index = () => {
    return (
        <AdCard sx={cardStyle}>
                    
                        <Logo/>
                    <CardContent>
                        <Typography color='#fff'>
                                Show us your love by leaving
                                 a <span style={{color:greenColor}}>positive</span>  review on trust 
                                 pilot and receive the extension of 50 
                                 additional products
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <StyledLink 
                                externalLink 
                                to='https://www.trustpilot.com/evaluate/vetrinalive.it' 
                                title='Write a review on Trustpilot'    
                                color={greenColor}
                                target='_blank'
                                />
                    </CardActions>
        </AdCard>
    );
}

export default memo(index);
