
import {CardContent,CardActions } from '@mui/material';
import {memo} from 'react';

//components 
import { CustomRedirectionButton,Link } from 'src/components/reusable';
import AdCard from 'src/components/reusable/AdCard';

//material
import { Typography } from '@mui/material';

//assets
import  Logo from '../../../../assets/Logo/logo-white-trustpilot 1.svg';
// style

import { cardStyle,greenColor } from './style'; 

const color:string='#00C48C';
const index = () => {
    return (
        <AdCard sx={cardStyle}>
                    
                        <img src={Logo}/>
                    <CardContent>
                        <Typography color='#fff'>
                                Show us your love by leaving
                                 a <span style={{color:greenColor}}>positive</span>  review on trust 
                                 pilot and receive the extension of 50 
                                 additional products
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link external 
                              target='_blank'  
                              to='https://www.trustpilot.com/evaluate/vetrinalive.it'>
                                <CustomRedirectionButton color={color}>
                                            Write a review on Trustpilot
                                </CustomRedirectionButton>
                        </Link>        
                    </CardActions>
        </AdCard>
    );
}

export default memo(index);
