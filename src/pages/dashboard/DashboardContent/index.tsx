//material ui
import { Grid} from "@mui/material";


//components
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";

//style


const DashBoardContent = () => {




    return (
                <Grid 
                    container 
                    spacing={3} 
                    sx={{padding:'10px 5% 30px 5%',backgroundColor:'#f7f7f7'}} >
                        <LeftColumn/>
                        <RightColumn/>
                        
                </Grid>
    );
}

export default DashBoardContent;
