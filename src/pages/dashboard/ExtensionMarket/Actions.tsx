import {memo} from 'react';

import { Link,CustomRedirectionButton } from 'src/components/reusable';

const Actions = () =>   <Link   
                                to='/extensions'>
                                <CustomRedirectionButton >
                                        Discover all extensions
                                </CustomRedirectionButton>        
                        </Link>  

export default memo(Actions);
