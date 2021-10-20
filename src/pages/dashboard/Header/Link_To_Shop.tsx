import {memo} from 'react';
import { Link } from 'src/components/reusable';
import CustomSvg from 'src/components/reusable/CustomSvg';
import RedirectionButton from 'src/components/reusable/RedirectionButton';


import { redirectionStyleButton } from './style';


import {ReactComponent as  ExternalLink} from '../../../assets/Icon/external-link.svg';
 

const color:string ='#fff'

const Link_To_Shop = () => {
    return (
        <Link to='https://app.vetrinalive.com/samshop' external >
            <RedirectionButton 
                            color={color}
                            icon={<CustomSvg color={color}  icon={<ExternalLink/>}/>} 
                            sx={redirectionStyleButton}  >
                            app.vetrinalive.com/samshop             
            </RedirectionButton>
        </Link>
    );
}

export default memo(Link_To_Shop);
