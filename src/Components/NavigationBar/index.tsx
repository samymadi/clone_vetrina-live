import {memo,useState} from 'react';

import {Box,Tabs,Tab,Typography} from '@mui/material';
import Header from './Header';

import TabItem from './TabItem';

const NavigationBar = () => {

    const [value, setValue] = useState<number>(0);
    const [navBarWidth,setNavBarWidth] = useState<string>('45px')

    const handleChange = async(event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    };


    const handleOpenNavBar = ()=>{
     ( navBarWidth === '45px') ? setNavBarWidth('260px') : setNavBarWidth('45px');
     console.log('extend');
    }
  
    return (
      <Box sx={{ width:navBarWidth,transition:'width 300ms ease-in',position:'absolute',top:'0',bottom:'0',left:'0'
      ,overflowY:'scroll',overflowX:'hidden','.MuiTabs-indicator':{width:'3px',left:'0',backgroundColor:'#21B8F9',borderRadius:'8px'},
      '.Mui-selected':{backgroundColor:'#F7F7F7',borderRadius:'3px','& p':{color:'#21B8F9'}}
      ,'::-webkit-scrollbar':{width:'4px'},'::-webkit-scrollbar-thumb':{backgroundColor:'lightgrey'}}}>
        
        <Header handleOpenNavBar={handleOpenNavBar}/>

        <Tabs
          orientation='vertical'
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          sx={{minWidth:'fit-content'}}
        >
          <TabItem iconName="home" text='Dashboard'></TabItem>
          <TabItem iconName="zap" text='Catalogue'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>
          <TabItem iconName="eye" text='Orders'></TabItem>

        </Tabs>
      </Box>
      )
}

export default memo(NavigationBar);


