import {Grid} from '@mui/material' 

import ConfigShop from "../ConfigShop";
import TrustPilot from "../ExternContent/TrustPilot";
import InviteFriend from "../Invite_friend";
import CustomerSupport from "../CustomerSupport";

//component 
import GridContainer from './GridContainer';


const RightColumn = () => {
    return (
        <GridContainer 
                rootGrid={{ xs: 12, md: 4, sm: 12 }} 
                spacing={3}>
                    <Grid item xs={12} md={12} sm={12}>
                            <ConfigShop/>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                            <TrustPilot/>  
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                            <InviteFriend/>  
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                            <CustomerSupport/>
                    </Grid>
                                     
    </GridContainer>
    );
}

export default RightColumn;
