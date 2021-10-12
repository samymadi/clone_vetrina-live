import  { memo } from 'react';

import { Avatar,Typography } from '@mui/material';

//material ui
import {Stack} from '@mui/material';


import profile from '../../../assets/Images/Profile_img.jpg'

const Content = () => {
    return (
        <Stack direction='row' alignItems='center' mt='30px' mb='60px'>
                <Avatar src={profile}/>
                <Typography fontSize='15px'  ml='30px' color='primary'>Alberto is here to help you.</Typography>

        </Stack>
    );
}

export default memo(Content);
