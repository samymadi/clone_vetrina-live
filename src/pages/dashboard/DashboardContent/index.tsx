//material ui
import { Grid} from "@mui/material";

//component 
import GridContainer from './GridContainer';
import Visitors from "../Visitors";
import Orders from "../Orders";
import ConfigShop from "../ConfigShop";
import ExtensionMarketplace from '../ExtensionMarket/index';
import InviteFriend from "../Invite_friend";
import CustomerSupport from "../CustomerSupport";
import TrustPilot from "../ExternContent/TrustPilot";
import MobileAppAd from "../ExternContent/MobileAppAd";
import Blog from "../Blog";


const DashBoardContent = () => {
    return (
                <Grid 
                    container 
                    spacing={3} 
                    sx={{padding:'10px 5% 30px 5%',backgroundColor:'#f7f7f7'}} >
                        <GridContainer
                                rootGrid={{ xs: 12, md: 8, sm: 12 }} 
                                childrenGrid={{xs: 12, md: 6, sm: 12}} 
                                spacing={3}>
                                    
                                  <Grid item xs={12} md={6} sm={12} >
                                        <Visitors/>   
                                  </Grid>
                                  <Grid item xs={12} md={6} sm={12} >
                                        <Orders/> 
                                  </Grid>
                                  <Grid item xs={12} md={6} sm={12} >
                                        <MobileAppAd />   
                                  </Grid>
                                  <Grid item xs={12} md={6} sm={12} >
                                        <ExtensionMarketplace />   
                                  </Grid>
                                  <Grid item xs={12} md={12} sm={12} >
                                        <Blog />   
                                  </Grid>
                                      
                                  

                                    

                        </GridContainer>
                        <GridContainer 
                                rootGrid={{ xs: 12, md: 4, sm: 12 }} 
                                childrenGrid={{xs: 12, md: 12, sm: 12}} 
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
                </Grid>
    );
}

export default DashBoardContent;
