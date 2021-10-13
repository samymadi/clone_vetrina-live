import {memo} from 'react';



//components


import { StyledLink } from 'src/components/reusable';


const HeaderActions = () =><StyledLink 
                                externalLink 
                                to='https://vetrinalive.com/blog' 
                                title='visite our blog'
                                color='#21B8F9'
                                iconName='external-link'  />
   

export default memo(HeaderActions);
