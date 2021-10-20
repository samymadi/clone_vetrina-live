import {memo} from 'react';

//material ui 
import { Card,CardMedia,Typography,Box } from '@mui/material';


//component 
import {Link} from '../';

//style 
import {boxChildStyle,boxRootStyle,imgStyle} from './style'

const index = ({extension}:Props) => {

    const {title,logo_url,id} =extension;    
    
    
    return (
             <Link
                to={`/extension/${id}`}>
                    <>
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
                    </>
                      
            </Link>
    );
}

export default memo(index);

interface Props{
    extension:any
}
