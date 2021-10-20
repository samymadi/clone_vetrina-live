
//third party imports
import {Tab} from '@mui/material';



//custom componets imports
import SelectedItem from './SelectedItem';
import ExtendItem from './ExtendItem'
import { Link } from 'src/components/reusable';


//type 
import { NavBarItem } from 'src/assets/static/staticData';


//styles
import { stackStyle,typographyStyle,tabStyle } from './style';

const RootTab = (props:NavBarItem) => {

    const {extend,subItems,icon,...rest} = props;

    //wrap the tab with extend accordion 
    const item:JSX.Element = extend ?   
                                    <ExtendItem subItems={subItems}>
                                        <SelectedItem icon={icon} {...rest}/>
                                    </ExtendItem>  : 
                                  <Link 
                                        to={rest.text} 
                                        style={{width:'100%'}}>
                                        <SelectedItem icon={icon} {...rest} />
                                  </Link>  
                                    

    const value = extend && {value:-1} //to disable the selection 
    
    return (
        <Tab {...rest}
             {...value}   
             disableRipple
             sx={{...tabStyle,padding:'0px'}}
             label={item}/>

    );
}

export default RootTab;





