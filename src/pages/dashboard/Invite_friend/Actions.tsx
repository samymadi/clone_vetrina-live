import {memo} from 'react';

import { CustomRedirectionButton,Link,CustomSvg } from 'src/components/reusable';
import {ReactComponent as RightArrow} from '../../../assets/Icon/arrow-right.svg';

const Actions = () =>  <Link to='/shareMedia'>
                                <CustomRedirectionButton  color='#21B8F9'  >
                                                        Complete the setup
                                </CustomRedirectionButton>
                        </Link>  
                    
   

export default memo(Actions);
