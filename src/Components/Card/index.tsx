
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    ThemeProvider,
    Typography
    
} from '@mui/material';

import Header from './Header';
import theme from './style';



//styles



const index = (props:Props):JSX.Element => {

    const {children,actions,...rest} = props

    return (
        <ThemeProvider theme={theme}>
            <Card>
                <Header {...rest}></Header>

                <CardContent>
                        {children} 
                </CardContent>

                <CardActions sx={{position:'absolute',bottom:'0',paddingLeft:'0'}}>
                        {actions}
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}

export default index;



export interface Props{
    title:string,
    icon:string,
    headerAction?:JSX.Element,
    children:JSX.Element | JSX.Element,
    actions?:JSX.Element
    titleColor?:string
}