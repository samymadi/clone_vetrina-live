import {useState} from 'react';


import { 
        AppBar as AppB,
        Button,
        Typography,
        Toolbar,
        Badge} from "@mui/material";


import DrawerNews from "./DrawerNews";        
import Icons from "../Icons";        

//style
import {appBarStyle,buttonStyle,toolbarStyle} from './style'

const AppBar = () => {

    
    const [isOpen,setIsOpen] = useState<boolean>(false);

    const toggleDrawer=()=>{
          setIsOpen(false);
    }

    const handleOpenDrawer = ()=>{
        setIsOpen(true)
    }
    return (
        <>
                <DrawerNews 
                    isOpen={isOpen} 
                    toggleDrawer={toggleDrawer}/>
                    
                <AppB 
                    position="static" 
                    sx={appBarStyle} >
                    <Toolbar sx={toolbarStyle}>
                            <>
                            <Typography
                                color='primary'
                                fontWeight='600'
                                fontSize='18px'>
                                    Dashboard
                            </Typography>
                            <Badge 
                                badgeContent={1} 
                                color="info" >
                                <Button
                                    onClick={handleOpenDrawer}
                                    startIcon={<Icons iconName='zap'/>}
                                    disableRipple 
                                    sx={buttonStyle} >
                                    What's new 
                                </Button>
                            </Badge>
                        </>   
                    </Toolbar>           
                </AppB>
        </>
    );
}

export default AppBar;
