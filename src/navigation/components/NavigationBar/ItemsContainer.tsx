import { useState } from 'react';


import RootTab from './RootTab';
import { Divider,Tabs,Tab,Accordion,AccordionSummary,AccordionDetails,CssBaseline ,Typography} from '@mui/material';
//static Data
import { navBarItem,navBarItem2,NavBarItem } from '../../../assets/static/staticData';
import Icons from '../../../components/Icons';





const ItemsContainer = (props:any) => {



    //useState
    const [value, setValue] = useState<number>(0);

    
    //eventListener
    const handleChange = async(event: React.SyntheticEvent, newValue: number) => {  
         newValue !== -1 &&  setValue(newValue);
    }


    const renderItem = (array :NavBarItem[])=>{
       return array
        .map<JSX.Element>(
            (element:NavBarItem,index:number)=><RootTab  key={index} 
                                                         {...element}
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
