import {CSSProperties, FC, memo} from 'react';

//style
import Style from './style.module.css';



const {container} = Style;


const index= ({icon,style,size,...props}:Props) => <div className={container} 
                                                   style={{...props,width:size,...style}}>  
                                                        {icon}
                                              </div>




export default memo(index);

interface Props {
    icon:JSX.Element
    size?:string,
    color?:string
    style?:CSSProperties
}
