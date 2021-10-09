import { Drawer,ThemeProvider, } from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";


//Components
import theme,{ContainerRoot} from "./style";



//style 
import {styledDrawer} from './style';



const NavigationBar = () => {

    const [drawewIsOpen,setDrawerIsOpen] = useState<boolean>(false);
    return (
        <ThemeProvider theme={theme}>
                        <Drawer
                            sx={styledDrawer(drawewIsOpen ? '200px' : "45px")}
                            variant="permanent"
                            anchor="left">
                                <ContainerRoot>
                                    <Header setDrawerIsOpen={setDrawerIsOpen} />
                                    <ItemsContainer/>    
                                </ContainerRoot>
                            
                        </Drawer>
        </ThemeProvider>  
    );
}

export default NavigationBar;
