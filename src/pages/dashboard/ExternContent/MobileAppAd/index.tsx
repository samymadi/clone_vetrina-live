import {memo} from 'react';


//material ui
import { Grid,CardMedia,Typography } from '@mui/material';

//component
import AdCard from 'src/components/reusable/AdCard';
import { StyledLink } from 'src/components/reusable';


//style
import { addCardStyle } from './style';


//assets
import {ReactComponent as PhoneImage} from '../../../../assets/Images/Device=iPhone 12.svg';
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
                            <StyledLink 
                                title='Show more' 
                                to='/show_more' 
                                color='#fff'/>  
                    </Grid>
                    <Grid item md={5}>
                            <PhoneImage/>
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
