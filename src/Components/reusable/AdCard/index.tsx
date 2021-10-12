import { SxProps,Theme } from '@mui/system';
import {memo} from 'react';



//style 
import { StyledAddCard } from './style';

const index = ({children,sx}:Props) => {

    return (
        <StyledAddCard sx={sx}> 
                {children}
        </StyledAddCard>
    );
}

export default memo(index);



interface Props{
    children:JSX.Element[] |JSX.Element
    sx?:SxProps<Theme>
}
