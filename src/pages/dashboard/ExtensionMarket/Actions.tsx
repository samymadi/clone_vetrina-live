import {memo} from 'react';

import { StyledLink } from 'src/components/reusable';

const Actions = () =><StyledLink 
                            title='Discover all extensions' 
                            to='/extensions' 
                            />

export default memo(Actions);
