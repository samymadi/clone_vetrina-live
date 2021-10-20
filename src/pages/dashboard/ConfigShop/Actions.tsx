import {memo} from 'react';
import {CustomRedirectionButton,Link,CustomSvg} from '../../../components/reusable'

import {ReactComponent as RightArrow } from '../../../assets/Icon/arrow-right.svg';

const Actions = () => <Link to='/wizard'>
                              
                                <CustomRedirectionButton>
                                                        Complete the setup
                                </CustomRedirectionButton>
                      </Link>

export default memo(Actions);
