//system imports 
import { useState,createContext} from "react";


//third party imports 
import { Drawer,ThemeProvider} from "@mui/material";


//custom Components imports 
import theme,{ContainerRoot} from "./style";
import Header from "./Header";
import Footer from "./Footer";
import ItemsContainer from "./ItemsContainer";



//style imports 
import {styledDrawer} from './style';



const NavigationBar = () => {

    const [drawewIsOpen,setDrawerIsOpen] = useState<boolean>(false);
    const NavBarContext = createContext<boolean>(false) 
    return (
        <ThemeProvider theme={theme}>
                   {/* <NavBarContext.Provider value={drawewIsOpen} > */}
                            <Drawer
                                sx={styledDrawer(drawewIsOpen ? '250px' : "55px")}
                                variant="permanent"
                                anchor="left">
                                    <ContainerRoot>
                                        <Header setDrawerIsOpen={setDrawerIsOpen} />
                                        <ItemsContainer/>
                                        {drawewIsOpen && <Footer></Footer> }
                                    </ContainerRoot>
                                
                            </Drawer>
                     {/* </NavBarContext.Provider>  */}
            </ThemeProvider>  
    );
}

export default NavigationBar;
