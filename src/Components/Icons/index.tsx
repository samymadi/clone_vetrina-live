import {memo, useState,useEffect} from 'react';
import { SvgIcon } from '@mui/material';

import home from '../../assets/Icon/home.svg';
import eye from '../../assets/Icon/eye.svg'
import rightArrow from '../../assets/Icon/arrow-right.svg';
import zap from '../../assets/Icon/zap.svg';
import menu from '../../assets/Icon/menu.svg';
import shoppingCart from '../../assets/Icon/shopping-cart.svg';
import list from '../../assets/Icon/list.svg';
import user from '../../assets/Icon/user.svg';
import target from '../../assets/Icon/target.svg';
import truck from '../../assets/Icon/truck.svg';
import dollarSign from '../../assets/Icon/dollar-sign.svg';
import brush from '../../assets/Icon/brush.svg';
import creditCard from '../../assets/Icon/credit-card.svg';
import Cog_Planet from '../../assets/Icon/Cog Planet.svg';
import new_App from '../../assets/Icon/new app.svg';
import settings from '../../assets/Icon/settings.svg';
import logOut from '../../assets/Icon/log-out.svg';
import code from '../../assets/Icon/code.svg';
import helpCircle from '../../assets/Icon/help-circle.svg';
import share2 from '../../assets/Icon/share-2.svg';



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
             case 'menu': setIcon(menu); break;
             case 'shopping-cart' :setIcon(shoppingCart);break;
             case 'list' :setIcon(list);break;
             case 'target' :setIcon(target);break;
             case 'truck' :setIcon(truck);break;
             case 'user' :setIcon(user);break;
             case 'dollar-sign' :setIcon(dollarSign);break;
             case 'brush' :setIcon(brush);break;
             case 'credit-card' :setIcon(creditCard);break;
             case 'Cog Planet' :setIcon(code);break;
             case 'new app' :setIcon(new_App);break;
             case 'settings' :setIcon(settings);break;
             case 'log-out' :setIcon(logOut);break;
             case 'help-circle' :setIcon(helpCircle);break;
             case 'share-2' :setIcon( share2);break;
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