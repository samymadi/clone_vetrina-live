import { Stack } from "@mui/material";
import {ReactComponent as Icon} from '../../assets/Icon/github.svg'


//Component 
import Header  from "./Header/index";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
    return (
        <Stack >
            <Header/>
            <DashboardContent />
        </Stack>
    );
}

export default Dashboard;
