import {useState} from 'react';
import {Container,Stack} from '@mui/material';
import NavigationBar from '../NavigationBar';
import DashBoardPanel from '../Panel/index';


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
            ></NavigationBar>

            <Stack  sx={{position:'absolute',transition:'left 300ms ease-in',left:navBarWidth,margin:'0',padding:'0 !important'}}>
             <DashBoardPanel></DashBoardPanel>
               <Stack >
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
                   <h1>oke</h1>
               </Stack>
            </Stack>
        </Stack>
    );
}

export default Layout;
