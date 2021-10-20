import {memo} from 'react';
import { RedirectionButton,CustomSvg } from '..';
import {ReactComponent as RightArrow} from '../../../assets/Icon/arrow-right.svg';



const index = ({children,color='#21B8F9'}:Props) => {
    return (
                                <RedirectionButton  color={color} 
                                                    icon={<CustomSvg icon={<RightArrow/>} 
                                                                     color={color}  />}
                                                    >
                                                        {children}
                                </RedirectionButton>
    );
}

export default memo(index);



interface Props {
    children:string
    color?:string
}
