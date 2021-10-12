import {memo} from 'react';


//material ui
import { Grid,Typography } from '@mui/material';



//style
import { 
        itemStyle,
        picStyle,
        typoCatStyle,
        typoTitleStyle,
        typoReadTimeleStyle } from './style';

const BlogItem = ({blog}:Props) => {
    const {category,title,read_time,link,image_url}= blog

    return (
        <Grid 
            item 
            md={6} 
            sm={6}
            sx={itemStyle} 
            >
             <a 
                href={link}
                target='_blank' 
                style={{color:'unset',textDecoration:'none'}}>
                <Grid 
                    container 
                    spacing={2}>
                        <Grid 
                            item 
                            md={4} 
                            sm={4}>
                                <img 
                                    style={picStyle} 
                                    src={image_url} />
                        </Grid>
                        <Grid 
                            item 
                            md={8} 
                            sm={8}>
                                 <Typography 
                                        color='info' 
                                        sx={typoCatStyle}>
                                            {category}
                                </Typography>   
                                 <Typography 
                                        color='primary'
                                        sx={typoTitleStyle}>
                                            {title} 
                                </Typography>   
                                 <Typography 
                                        color='primary'
                                        sx={typoReadTimeleStyle}>
                                            Estimated reading: {read_time} min
                                </Typography>   
                        </Grid>
                </Grid>
            </a> 
        </Grid>
    );
}

export default memo(BlogItem);


interface Props{
    blog:any
}