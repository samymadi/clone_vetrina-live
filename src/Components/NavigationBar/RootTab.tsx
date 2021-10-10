import {Stack,Typography,Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import Icons from '../Icons';

import SelectedItem from './SelectedItem';
import ExtendItem from './ExtendItem'


//type 
import { NavBarItem } from 'src/assets/static/staticData';


//styles
import { stackStyle,typographyStyle,tabStyle } from './style';

const RootTab = (props:NavBarItem) => {

    const {extend,subItems,...rest} = props;

    //wrap the tab with extend accordion 
    const item:JSX.Element = extend ?   
                                    <ExtendItem subItems={subItems}>
                                        <SelectedItem {...rest}/>
                                    </ExtendItem>  : 

                                    <SelectedItem {...rest} />

    const value = extend && {value:-1} //to disable the selection 
    
    return (
        <Tab {...props}
             {...value}   
             disableRipple
             sx={{...tabStyle,padding:'0px'}}
             label={item}
              
             />

    );
}

export default RootTab;





