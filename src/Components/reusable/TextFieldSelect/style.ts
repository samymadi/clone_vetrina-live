import { TextField,styled } from "@mui/material";



export const  StyledTextField = styled(TextField)(()=>({

              flexDirection:'column-reverse',  
              width:'80%',
              margin:'15px auto',
              '& option':{
                  color:'red',
                  backgroundColor:'red'
              },
              ...helperTextStyle,
              ...inputStyle,
              ...listItemStyle 
}))



const helperTextStyle = {
    '.MuiFormHelperText-root':{
            margin:'0',
            color:'#546679',
            fontWeight:'500'
    }
}

const inputStyle = {
    '.MuiSelect-select':{
           padding:'10px',
           fontSize:'13px' 
    }
}

const listItemStyle = {
    '& optgroup':{
       
    }
}


