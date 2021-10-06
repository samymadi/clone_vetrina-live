//react
import {memo} from 'react';

//material ui
import {Stack} from '@mui/material';

//Component
import Item from './Item'

const CardContent = () => {
    return (
        <Stack mt='25px'>
                <Item 
                    text='Orders received:' 
                    value='156' />
                <Item 
                    text='Earnings:' 
                    value='2654.23' 
                    valuePrefix='£' />
        </Stack>
    );
}

export default memo(CardContent);
