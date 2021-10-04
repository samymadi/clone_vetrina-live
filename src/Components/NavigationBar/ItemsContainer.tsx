
import TabItem from './TabItem';
import { Divider } from '@mui/material';
//static Data
import { navBarItem,navBarItem2,NavBarItem } from '../../static/staticData';





const ItemsContainer = (props:any) => {


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
        <>
          {renderItem(navBarItem)}
            <Divider sx={{margin:'10px 0px'}}/>
          {renderItem(navBarItem2)}
        </>
    );
}


export default ItemsContainer;
