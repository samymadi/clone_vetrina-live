import {memo} from 'react';

// Icons
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




//Return Icons with the  icon name props
const Icon = (props:Props):JSX.Element => {
    
    const {iconName,color,fontSize,...rest} = props;
    const style = {
             sx:{
                 color:color && color,
                 fontSize,
                },
            }

    switch(iconName){
        case 'eye': return <RemoveRedEyeOutlinedIcon  color='primary' {...style}    />
        case 'rightArrow' : return <ArrowForwardIcon  color='primary' {...style} />
        default :return <></>
    }
}

export default memo(Icon);


interface Props{
    iconName:string
    color?:string
    fontSize?:string | undefined
}