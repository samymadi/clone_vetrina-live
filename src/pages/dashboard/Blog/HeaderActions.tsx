import {memo} from 'react';



//components


import { StyledLink } from 'src/components/reusable';


const HeaderActions = () =><StyledLink 
                                externalLink 
                                to='https://vetrinalive.com/blog' 
                                title='visite our blog'
                                iconName='external-link'  />
   

export default memo(HeaderActions);
