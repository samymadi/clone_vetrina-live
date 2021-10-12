import {memo} from 'react';

//material ui 
import { Card,CardMedia,Typography,Box } from '@mui/material';


//style 
import {boxChildStyle,boxRootStyle,linkStyle,imgStyle} from './style'

const index = () => {
    return (
      

             <a 
                href="/" 
                tabIndex={-1} 
                style={linkStyle}  >
                    <Box 
                        sx={boxRootStyle}>
                            <img 
                                    style={imgStyle}  
                                    src='https://vetrinalive-prod.s3.eu-south-1.amazonaws.com/store-features/G0fqmm0JWYo3m4w5pdER3d31juVW8YFWh0vnICgb.png' />
                            
                            <Box sx={boxChildStyle}/>
                    </Box>            
                <Typography color='primary'>
                    Compn
                </Typography>    
                      
            </a>
    );
}

export default memo(index);
