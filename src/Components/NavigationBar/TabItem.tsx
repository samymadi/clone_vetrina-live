import {Stack,Typography,Tab} from '@mui/material';
import Icons from '../Icons';

const TabItem = (props:{iconName:string,text:string}) => {

    const {iconName,text} = props;
    return (
        <Tab {...props} label={    <Stack  direction='row' alignItems='center'
                            {...props}
                            sx={{display:'flex',minHeight:"20px",height:"20px",width:'100%',borderLeft:'3px solid transparent',marginLeft:'10px',paddingLeft:'10px'}}
                            
                            >
                                <Icons iconName={iconName} fontSize='18px'/>
                                <Typography sx={{textTransform:'none'}} ml='15px' color='#233B53' fontSize='14px'>
                                        {text}
                                </Typography>
                        </Stack>} sx={{padding:'5px 0',minHeight:'32px !important'}}/>

    );
}

export default TabItem;
