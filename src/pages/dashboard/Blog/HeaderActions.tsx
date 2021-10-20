import {memo} from 'react';



//components


import { RedirectionButton,Link,CustomSvg } from 'src/components/reusable';
import {ReactComponent as ExternalLink} from '../../../assets/Icon/external-link.svg'; 


const HeaderActions = () => <Link   external
                                    target='_blank'
                                    to='https://vetrinalive.com/blog'>
                                    <RedirectionButton icon={<CustomSvg icon={<ExternalLink />} color='#21B8F9'/>}>
                                            Visit our blog
                                    </RedirectionButton>        
                            </Link>  
   

export default memo(HeaderActions);
