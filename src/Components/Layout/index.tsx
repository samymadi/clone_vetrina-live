import {useState} from 'react';
import {Container,
        Stack} from '@mui/material';

import NavigationBar from '../NavigationBar';
import DashBoardPanel from '../Panel/index';



//Routes
import Dashboard from '../../Routes/Dashboard';

import {
        containerStackStyle,
        stackContentStyle} from './style';


const Layout = () => {


    const [navBarWidth,setNavBarWidth] = useState<string>('45px')

    const handleOpenNavBar = ()=>{
        ( navBarWidth === '45px') ? setNavBarWidth('260px') : setNavBarWidth('45px');
       }


    return (
        <Stack direction='row'>
            <NavigationBar 
                    handleOpenNavBar={handleOpenNavBar} 
                    navBarWidth={navBarWidth} 
            />
            <Stack sx={{...containerStackStyle,left:navBarWidth}} >  
                        <DashBoardPanel></DashBoardPanel>

                        <Stack sx={stackContentStyle}>
                                 <Dashboard></Dashboard>       
                        </Stack>
            </Stack>
        </Stack>
    );
}

export default Layout;
