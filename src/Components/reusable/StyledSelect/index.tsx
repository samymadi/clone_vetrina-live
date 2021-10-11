import {memo} from 'react';

//material ui 
import {MenuItem,ThemeProvider} from '@mui/material'



//style
import theme,{ StyledSelect } from './style';

const index = (props:Props) => {

    const {values,value,setValue} = props;



    const handleChange = (event:any)=>{
        setValue(event.target.value);
    }


    return (

      <ThemeProvider theme={theme}>

                    <StyledSelect
                        onChange={handleChange}
                        value={value}
                        >   
                        {values.map((element:string,index:number)=>
                            (<MenuItem value={index} key={index}>
                                {element}
                            </MenuItem>
                            )
                            )}
                    </StyledSelect>
       </ThemeProvider>  
    );
}

export default memo(index);



interface Props {
    values:string[]
    value:number
    setValue:React.Dispatch<React.SetStateAction<number>>
}
