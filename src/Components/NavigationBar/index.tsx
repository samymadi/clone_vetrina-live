import {memo,useState} from 'react';

import {Tabs,
        Typography,
        ThemeProvider,
        Divider
        } from '@mui/material';

import Header from './Header';
import ItemsContainer from './ItemsContainer';

//style 
import theme,{BoxRoot,setRootStyle} from './style';

const NavigationBar = (props:Props) => {


    const {navBarWidth} = props; //

    

  
    return (

      <ThemeProvider theme={theme}>

          <BoxRoot sx={setRootStyle(navBarWidth)}>
            
                <Header {...props}/>
                <ItemsContainer/>    
                
          </BoxRoot>
        </ThemeProvider>
      )
}

export default memo(NavigationBar);



interface Props{
  handleOpenNavBar: ()=>void,
  navBarWidth:string
}


