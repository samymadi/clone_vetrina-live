import { useState } from 'react';


import TabItem from './TabItem';
import { Divider,Tabs } from '@mui/material';
//static Data
import { navBarItem,navBarItem2,NavBarItem } from '../../assets/static/staticData';





const ItemsContainer = (props:any) => {




  const [value, setValue] = useState<number>(0);

  const handleChange = async(event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
  };


    const renderItem = (array :NavBarItem[])=>{
       return array
        .map<JSX.Element>(
            (element:NavBarItem,index:number)=><TabItem  key={index} 
                                                         iconName={element.iconName}
                                                         text={element.text}
                                                         {...props}
                                                />)
          
        }
    return (
              <Tabs
                  orientation='vertical'
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  >
                    
                    {renderItem(navBarItem)}
                      <Divider  sx={{margin:'10px 0px'}}/>
                    {renderItem(navBarItem2)}
              </Tabs>
    );
}


export default ItemsContainer;
