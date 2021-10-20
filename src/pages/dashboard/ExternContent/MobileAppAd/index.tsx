import {memo} from 'react';


//material ui
import { Grid,Typography } from '@mui/material';

//component
import {AdCard,CustomRedirectionButton,Link} from 'src/components/reusable';


//style
import { addCardStyle } from './style';


//assets
import  PhoneImage from '../../../../assets/Images/Device=iPhone 12.svg';
import  AndroidAppleStore from '../../../../assets/Images/AndroidAppleStore.png';

const index = () => {
    return (
        <AdCard sx={addCardStyle}>
            <Grid container spacing={2}>
                    <Grid 
                        item 
                        md={7}>
                            <Typography 
                                    color='#fff' 
                                    fontSize="22px">
                                Sell your products on your exclusive 
                                APP published on the stores 
                            </Typography>

                            <Link external 
                                  target='_blank'  
                                  to='https://www.apple.com'>
                                        <CustomRedirectionButton color='#fff'>
                                                            Show more
                                        </CustomRedirectionButton>
                            </Link> 
                    </Grid>
                    <Grid item md={5}>
                            <img src={PhoneImage}/>
                    </Grid>
                    <Grid 
                        item 
                        md={12} 
                        xs={11} 
                        sm={11} >
                            <img src={AndroidAppleStore}/>
                    </Grid>
            </Grid>
        </AdCard>
    );
}

export default memo(index);
