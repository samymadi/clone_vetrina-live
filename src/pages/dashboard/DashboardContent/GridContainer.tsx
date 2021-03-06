import {memo} from 'react';

import {Grid} from '@mui/material';



const GridContainer = (props:Props) => {


    const {rootGrid,spacing,children} = props
    
    return (
            <Grid 
                item 
                {...rootGrid} 
                sx={{marginTop:'-80px'}}>   
                    <Grid 
                        container 
                        spacing={spacing}>
                        {children}
                    </Grid>
            </Grid>
    );
}

export default memo(GridContainer);


interface Props{
        rootGrid:BreakPoints
        spacing:string | number
        children:JSX.Element[]
}



interface BreakPoints { 
    xs?:any,sm?:any,md?:any,lg?:any,xl?:any
}
