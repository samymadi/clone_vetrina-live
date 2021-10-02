import { createTheme } from "@mui/material";
import globalTheme from "../../Styles/GlobalTheme";




export default createTheme(globalTheme,{

    typography:{
        fontFamily:'NotoHK'
    },

    
    components:{
        MuiCard:{
            styleOverrides:{
                root: {
                    position:'relative',
                    height:'180px',
                    minWidth:'300px',
                    width:'fit-content',
                    padding:"15px",
                    borderRadius:'8px',
                    boxShadow:'0px 4px 4px #dddddd'
                  },
            }
        },
        MuiCardContent:{
            styleOverrides:{
                    root:{
                        padding:'0',
                        marginTop:'10px'
                    }
            }
            
        }

    },

   
    
})







export const typographyStyle = { 
            ml:"15px",
            color:"primary",
            fontSize:"20px",
            padding:'0',
            sx:{ fontWeight: "500"}
}

export const StackStyle = {
        sx:{padding:"0"},
}


