import {memo,useState} from 'react';

import {Box,Tabs,Tab,Typography} from '@mui/material';
const NavigationBar = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
      console.log(event,newValue);
    };
  
    return (
      <Box sx={{ width: '20%',margin:"20px",'& span':{left:'0'}}}>
        <Tabs
          orientation='vertical'
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="New that  the next line"
            wrapped
          />
          <Tab value="two" label="Item Two" />  
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
      )
}

export default memo(NavigationBar);


