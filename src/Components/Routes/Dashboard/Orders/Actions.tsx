import {memo} from 'react';
import StyledLink from '../../../StyledLink';

//Component 
const Actions = () => {
    return (
        <StyledLink 
            title='10 free tips to increase your sales' 
            to='/categories' 
            target='_blank'
        />
            
       
    );
}

export default memo(Actions);
