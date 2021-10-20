import {memo} from 'react';
import {Link,CustomRedirectionButton} from '../../../components/reusable';

//Component 
const Actions = () =>   <Link to='/categories'>
                            <CustomRedirectionButton>
                                    10 free tips to increase your sales
                            </CustomRedirectionButton>        
                        </Link>             


export default memo(Actions);
