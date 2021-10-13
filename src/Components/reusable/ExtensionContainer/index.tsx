import {memo} from 'react';

//material ui 
import { Card,CardMedia,Typography,Box } from '@mui/material';


//style 
import {boxChildStyle,boxRootStyle,linkStyle,imgStyle} from './style'

const index = ({extension}:Props) => {

    const {title,logo_url} =extension;    
    
    
    return (
             <a 
                href="/" 
                tabIndex={-1} 
                style={linkStyle}  >
                    <Box 
                        sx={boxRootStyle}>
                            <img 
                                    style={imgStyle}  
                                    src={logo_url} />
                            
                            <Box sx={boxChildStyle}/>
                    </Box>            
                <Typography color='primary'>
                    {title}
                </Typography>    
                      
            </a>
    );
}

export default memo(index);

interface Props{
    extension:any
}
