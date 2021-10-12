import { Drawer,ThemeProvider, } from "@mui/material";
import { useState } from "react";





//Components
import theme,{ContainerRoot} from "./style";
import Header from "./Header";
import Footer from "./Footer";
import ItemsContainer from "./ItemsContainer";



//style 
import {styledDrawer} from './style';



const NavigationBar = () => {

    const [drawewIsOpen,setDrawerIsOpen] = useState<boolean>(false);
    return (
        <ThemeProvider theme={theme}>
                        <Drawer
                            sx={styledDrawer(drawewIsOpen ? '220px' : "50px")}
                            variant="permanent"
                            anchor="left">
                                <ContainerRoot>
                                    <Header setDrawerIsOpen={setDrawerIsOpen} />
                                    <ItemsContainer/>
                                    <Footer></Footer>    
                                </ContainerRoot>
                            
                        </Drawer>
        </ThemeProvider>  
    );
}

export default NavigationBar;
