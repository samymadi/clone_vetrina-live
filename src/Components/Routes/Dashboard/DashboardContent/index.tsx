
import { Grid} from "@mui/material";
import Card from '../../../Card/index';

import GridContainer from './GridContainer';

const DashBoardContent = () => {
    return (
                <Grid container spacing={2} sx={{padding:'10px 4% 30px 4%',backgroundColor:'#f7f7f7'}} >
                    <GridContainer
                            rootGrid={{ xs: 12, md: 8, sm: 12 }} 
                            childrenGrid={{xs: 12, md: 6, sm: 12}} 
                            spacing={2}>
                                 <Card title='News' icon='settings' children={<p>code info</p>}  />
                                 <Card title='News' icon='settings' children={<p>code info</p>}  />

                    </GridContainer>
                    <GridContainer 
                            rootGrid={{ xs: 12, md: 4, sm: 12 }} 
                            childrenGrid={{xs: 12, md: 12, sm: 12}} 
                            spacing={2}>
                                 <Card title='News' icon='settings' children={<p>code info</p>}  />
                                 <Card title='News' icon='settings' children={<p>code info</p>}  />
                                 <Card title='News' icon='settings' children={<p style={{height:'300px',backgroundColor:'red'}}>code info</p>}  />
                    </GridContainer>
                </Grid>
    );
}

export default DashBoardContent;
