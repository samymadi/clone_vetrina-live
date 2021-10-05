
import { Grid,Stack } from "@mui/material";
import { height } from "@mui/system";
import Card from '../../../Card/index';

const DashBoardContent = () => {
    return (
                <Grid container spacing={2} sx={{padding:'10px 80px 30px 80px',backgroundColor:'#f7f7f7'}} >
                    <Grid item md={8} sm={12} sx={{marginTop:'-50px'}}>   
                            <Grid container spacing={2} >
                                    <Grid item md={6} sm={12} >
                                        <Card title='News' icon='settings' children={<p>code info</p>}  />
                                    </Grid> 
                                    <Grid item md={6} sm={12} >
                                        <Card title='News' icon='settings' children={<p>code info</p>}  />
                                    </Grid> 
                                    <Grid item md={12} sm={12} >
                                        <Card title='News' icon='settings' children={<p>code info</p>}  />
                                    </Grid> 
                                    <Grid item md={6} sm={12} >
                                        <Card title='News' icon='settings' children={<p>code info</p>}  />
                                    </Grid> 
                                    <Grid item md={6} sm={12} >
                                        <Card title='News' icon='settings' children={<p>code info</p>}  />
                                    </Grid> 
                            </Grid>
                    </Grid>

                    <Grid item md={4} sm={12} sx={{marginTop:'-50px'}}>
                            <Grid container spacing={2}>
                                        <Grid item md={12} sm={12}>
                                            <Card title='News' icon='settings' children={<p>code info</p>}  />
                                        </Grid>
                                        <Grid item md={12} sm={12}>
                                            <Card title='News' icon='settings' children={<p>code info</p>}  />
                                        </Grid>
                                        <Grid item md={12} sm={12}>
                                            <Card title='News' icon='settings' children={<p>code info</p>}  />
                                        </Grid>
                            </Grid>
                    </Grid>
                    
                    
                    {/* <Grid item md={4} sm={12} >
                        <Card title='News' icon='eye' children={<p>code info</p>}  />
                    </Grid>
                    <Grid item md={4} sm={12} sx={{marginTop:'-50px'}}>
                        <Card title='News' icon='settings' children={<p>code info</p>}  />
                    </Grid>
                    <Grid item md={4} sm={12} sx={{marginTop:'-50px',backgroundColor:'lightgrey'}} >
                       <Grid container direction='column' spacing={2}>
                            <Grid item md={12} sm={12} >
                                <Card title='News' icon='code' children={<p>code info</p>}  />
                            </Grid>
                            <Grid item md={12} sm={12} >
                                <Card title='News' icon='code' children={<p>code info</p>}  />
                            </Grid>
                        </Grid>     
                    </Grid>
                    <Grid item md={8} sm={12} sx={{backgroundColor:'lightcoral'}} >
                        <Card title='News' icon='code' children={<p>code info</p>}  />
                    </Grid> */}
                </Grid>
    );
}

export default DashBoardContent;
