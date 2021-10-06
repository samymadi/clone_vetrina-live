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
                    minHeight:'180px',
                    minWidth:'250px',
                    padding:"15px",
                    borderRadius:'8px',
                    boxShadow:'0px 4px 6px #dfdfdf',
                    margin:'0',
                  },
            }
        },
        MuiCardContent:{
            styleOverrides:{
                    root:{
                        padding:'0',
                        marginTop:'10px',
                        marginBottom:'30px'
                    }
            }
            
        },
        MuiCardActions:{
            styleOverrides:{
                    root:{
                        position:'absolute',
                        bottom:'0',
                        paddingLeft:'0'
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


