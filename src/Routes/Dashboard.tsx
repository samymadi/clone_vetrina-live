import { Stack } from "@mui/material";


//Component 
import Header  from "../Components/Routes/Dashboard/Header/index";
import DashboardContent from "../Components/Routes/Dashboard/DashboardContent";

const Dashboard = () => {
    return (
        <Stack >
            <Header/>
            <DashboardContent />
        </Stack>
    );
}

export default Dashboard;
