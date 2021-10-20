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

import { Link } from 'src/components/reusable';

const BlogItem = ({blog}:Props) => {
    const {category,title,read_time,link,image_url}= blog

    return (
        <Grid 
            item 
            md={6} 
            sm={6}
            sx={itemStyle} 
            >
             <Link 
                external
                to={link}
                target='_blank'>
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
            </Link> 
        </Grid>
    );
}

export default memo(BlogItem);


interface Props{
    blog:any
}