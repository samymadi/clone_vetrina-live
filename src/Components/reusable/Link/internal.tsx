import {Link} from "react-router-dom";


//types
import {LinkProps} from '.'

//style
import { styledLink } from "./style";

const Internal = ({children,to,style,...props}:LinkProps) => {
    return (
        <Link to={to} {...props} style={{...styledLink,...style}}>
            {children}
        </Link>
    );
}

export default Internal;

