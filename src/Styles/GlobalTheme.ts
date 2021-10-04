import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";



const globalTheme = createTheme({

    palette:{
        primary:{
            main:"#103B66",
        },
        secondary:{
            main:'#fff'
        },
        info:{
            main:'#21B8F9'
        }
    },
    typography:{
        fontFamily:'NotoHK',
    },


    
})



export default globalTheme;




