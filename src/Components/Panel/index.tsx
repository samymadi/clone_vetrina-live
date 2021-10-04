import {memo} from 'react';
import {Typography,ThemeProvider,Badge ,Button} from '@mui/material';



//Components

//style 
import theme,{DashNavBar} from './style';
import Icons from '../Icons';


const DashboardPanel = () => {
    return (
        <ThemeProvider theme={theme}>
            <DashNavBar>
                <Typography
                    color='primary'
                    fontWeight='500'
                    fontSize='22px'
                    >Dashboard
                </Typography>
                <Badge badgeContent={1} color="info">
                    <Button 
                        disableRipple
                        startIcon={<Icons iconName='zap' />}
                        sx={{textTransform:'none','&:hover':{backgroundColor:'white'},padding:"0 !important"}}
                        >What's new 
                    </Button>
                </Badge>
            </DashNavBar>

        </ThemeProvider>
    );
}

export default memo(DashboardPanel);
