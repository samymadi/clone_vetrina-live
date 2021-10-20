import { useState } from 'react';

import {Drawer,Box,Typography,IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const DrawerNews = ({isOpen,toggleDrawer}:Props) => {


    const handleClick = ()=>{
        toggleDrawer();
    } 

    return (
        <Drawer
        anchor='right'
        open={isOpen}
        onClose={()=>toggleDrawer()}
        >

            <Box width='350px' style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 15px'}}>
                <Typography fontSize='18px'>
                    What's new
                </Typography>

                <IconButton>
                        <CloseIcon  onClick={handleClick}/>
                </IconButton>
            </Box>
       </Drawer>
    );
}

export default DrawerNews;


interface Props{
    isOpen:boolean
    toggleDrawer:()=>void
}
