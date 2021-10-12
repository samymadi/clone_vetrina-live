import {memo} from 'react';


import {ButtonStyle} from './Style';


const index = ({children}:Props) => {
    return (
        <ButtonStyle>
            {children}
        </ButtonStyle>
    );
}

export default memo(index);



interface Props{
    children?:string
}
