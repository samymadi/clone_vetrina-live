import {CSSProperties, memo} from 'react';

import Internal from './internal';
import External from './external';


const index = ({external,...props}:IndexProps) => external ? <External {...props}/> 
                                                           : <Internal {...props}/>

export default memo(index);




interface IndexProps extends LinkProps {
    external?:boolean
}

export interface LinkProps{
    children:JSX.Element
    to:string
    target?:string
    style?:CSSProperties
}
