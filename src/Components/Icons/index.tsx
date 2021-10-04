import {memo, useState,useEffect} from 'react';
import { SvgIcon } from '@mui/material';

import home from '../../assets/Icon/home.svg';
import eye from '../../assets/Icon/eye.svg'
import rightArrow from '../../assets/Icon/arrow-right.svg';
import zap from '../../assets/Icon/zap.svg';
import menu from '../../assets/Icon/menu.svg';


//Return Icons with the  icon name props
const Icon = (props:Props):JSX.Element => {
    
    const {iconName,color,fontSize,...rest} = props;
    const [icon,setIcon] = useState<string>('');

    
            
    useEffect(()=>{
        SwitchCase();
    },[])        
    

    const SwitchCase = ()=>{
        switch(iconName){
             case 'eye': setIcon(eye); break;
             case 'rightArrow' :setIcon(rightArrow); break;
             case 'zap' : setIcon(zap); break;
             case 'home' : setIcon(home); break;
             case 'menu' :setIcon(menu);break;
             default :return;
        }
    }        
    

        return <img src={icon} style={{height:fontSize,width:fontSize,...rest}} />  
}

export default memo(Icon);


interface Props{
    iconName:string
    color?:string
    fontSize?:string | undefined
}