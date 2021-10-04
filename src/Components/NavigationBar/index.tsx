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

    const [value, setValue] = useState<number>(0);

    const handleChange = async(event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    };

  
    return (

      <ThemeProvider theme={theme}>

          <BoxRoot sx={{ width:navBarWidth,
          '.Mui-selected':{backgroundColor:'#F7F7F7',borderRadius:'3px','& p':{color:'#21B8F9'}}
          }}>
            
                <Header {...props}/>

                <Tabs
                  orientation='vertical'
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  >
                  <ItemsContainer/>    
                
                </Tabs>
            </BoxRoot>
        </ThemeProvider>
      )
}

export default memo(NavigationBar);



interface Props{
  handleOpenNavBar: ()=>void,
  navBarWidth:string
}


