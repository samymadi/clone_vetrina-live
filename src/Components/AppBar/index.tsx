import { AppBar as AppB,Button,Typography,Toolbar,Badge} from "@mui/material";


const AppBar = () => {
    return (
                    <AppB position="static" sx={{boxShadow:'0px 1px 4px lightgrey'}} >
                        <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'white',minHeight:'64px !important'}}>
                              <>
                                <Typography
                                    color='primary'
                                    fontWeight='600'
                                    fontSize='18px'
                                 
                                    >Dashboard
                                </Typography>
                                <Badge badgeContent={1} color="info">
                                    <Button >
                                        What's new 
                                    </Button>
                                </Badge>
                            </>   
                        </Toolbar>           
                    </AppB>
    );
}

export default AppBar;
