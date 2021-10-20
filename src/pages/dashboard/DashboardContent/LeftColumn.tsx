import {Grid, GridSize} from '@mui/material' 



//component 
import GridContainer from './GridContainer';
import Visitors from "../Visitors";
import Orders from "../Orders";
import PeriodChange,{PeriodeFunction} from './PeriodChange';
import ExtensionMarketplace from '../ExtensionMarket/index';
import MobileAppAd from "../ExternContent/MobileAppAd";
import Blog from "../Blog";



import { useEffect, useState } from "react";
import { getShopInfo } from "src/services/api/Dashboard/apiCall";



const LeftColumn = () => {

    
    const [shopInfoOrders,setShopInfoOrders] = useState({});
    const [shopInfoVisitors,setShopInfoVisitors] = useState({});
    const [isLoading,setIsLoading]=useState<boolean>(true);

    useEffect(()=>{
            getShopDetails();
    },[])

    const getShopDetails= async()=>{
            const result = await getShopInfo();
            if(result.error) console.log(result.error);
                    else{        
                            setShopInfoOrders(result.data.orders);
                            setShopInfoVisitors(result.data.views);}
            setIsLoading(false);
    }


    const breakpoints:{xs:GridSize,md:GridSize,sm:GridSize} = { 
            xs: 12, 
            md: 6, 
            sm: 12
        }


    return (
        <GridContainer  rootGrid={{ xs: 12, md: 8, sm: 12 }} 
                        spacing={3}>
                                <Grid item {...breakpoints} >
                                        <PeriodChange>
                                                { (p:PeriodeFunction):JSX.Element=> <Visitors   views={shopInfoVisitors} 
                                                                                                isLoading={isLoading}
                                                                                                p={p}/>      
                                                }
                                        </PeriodChange> 
                                </Grid>
                                  <Grid item {...breakpoints} >
                                        <PeriodChange>
                                                { (p:PeriodeFunction):JSX.Element=>  <Orders orders={shopInfoOrders} 
                                                                                             isLoading={isLoading} 
                                                                                             p={p}/>   
                                                }
                                        </PeriodChange> 
                                  </Grid>
                                  <Grid item {...breakpoints} >
                                        <MobileAppAd />   
                                  </Grid>
                                  <Grid item {...breakpoints} >
                                        <ExtensionMarketplace />   
                                  </Grid>
                                  <Grid item xs={12} md={12} sm={12} >
                                        <Blog />   
                                  </Grid>

        </GridContainer>
    );
}

export default LeftColumn;



