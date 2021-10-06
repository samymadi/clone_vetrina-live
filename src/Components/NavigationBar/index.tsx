import {memo,useState} from 'react';

import {Tabs,
        Typography,
        ThemeProvider,
        Divider
        } from '@mui/material';

import Header from './Header';
import ItemsContainer from './ItemsContainer';

//style 
import theme,{BoxRoot} from './style';

const NavigationBar = (props:Props) => {


    const {navBarWidth} = props; //

    

  
    return (

      <ThemeProvider theme={theme}>

          <BoxRoot sx={{ width:navBarWidth,
          '.Mui-selected':{backgroundColor:'#F7F7F7',borderRadius:'3px','& p':{color:'#21B8F9'}}
          }}>
            
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


