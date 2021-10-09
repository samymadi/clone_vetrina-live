//material ui
import { Grid} from "@mui/material";

//component 
import Card from '../../../components/reusable/Card/index';
import GridContainer from './GridContainer';
import Visitors from "../Visitors";
import Orders from "../Orders";
import ConfigShop from "../ConfigShop";


const DashBoardContent = () => {
    return (
                <Grid 
                    container 
                    spacing={2} 
                    sx={{padding:'10px 5% 30px 5%',backgroundColor:'#f7f7f7'}} >
                        <GridContainer
                                rootGrid={{ xs: 12, md: 8, sm: 12 }} 
                                childrenGrid={{xs: 12, md: 6, sm: 12}} 
                                spacing={2}>
                                    <Visitors/>   
                                    <Orders/>   
                                    {/* <Card title='News' icon='settings' children={<p>code info</p>}  /> */}

                                    

                        </GridContainer>
                        <GridContainer 
                                rootGrid={{ xs: 12, md: 4, sm: 12 }} 
                                childrenGrid={{xs: 12, md: 12, sm: 12}} 
                                spacing={2}>
                                    <ConfigShop/>   
                                    <Card title='News' icon='settings' children={<p>code info</p>}  />
                        </GridContainer>
                </Grid>
    );
}

export default DashBoardContent;
