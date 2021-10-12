import {memo} from 'react';

import { StyledLink } from 'src/components/reusable';

const Actions = () => <StyledLink 
                                iconName='rightArrow' 
                                title='Start Inviting friends!' 
                                to='/shareMedia'
                                />
   

export default memo(Actions);
