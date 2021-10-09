import {memo} from 'react';
import StyledLink from '../../../components/reusable/StyledLink/index'

const Actions = () => <StyledLink 
                            title='Complete the setup' 
                            to="/setup"
                            />

export default memo(Actions);
