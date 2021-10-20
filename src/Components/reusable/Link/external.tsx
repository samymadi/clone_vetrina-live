import {memo} from 'react';

//type
import {LinkProps} from '.'
//style
import { styledLink } from './style';

const External = ({children,style,to,...props}:LinkProps) => {
    return (
        <a href={to} style={{...styledLink,...style}} {...props}>
          {children}  
        </a>
    );
}

export default memo(External);
