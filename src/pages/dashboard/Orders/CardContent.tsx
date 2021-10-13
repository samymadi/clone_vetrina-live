//react
import {memo} from 'react';

//material ui
import {Stack,CircularProgress} from '@mui/material';

//Component
import Item from './Item';
import {ManageLoading} from '../../../components/reusable/index';

const CardContent = ({value,isLoading}:Props) => {
    console.log("value orders",value);

    return (
        <Stack mt='25px' mb='40px'>
                <Item 
                    text='Orders received:' 
                    value= {<ManageLoading 
                                        loader={<CircularProgress size='15px' />} 
                                        isLoading={isLoading} >
                                <>
                                    { value && value.count}
                                </>
                            </ManageLoading> }
                    />
                <Item 
                    text='Earnings:' 
                    value={<ManageLoading 
                                    loader={<CircularProgress size='15px' />} 
                                    isLoading={isLoading} >
                                <>
                                    { value && value.price}
                                </>
                         </ManageLoading>}
                    valuePrefix='£' />
        </Stack>
    );
}

export default memo(CardContent);


interface Props {
    value:{count:number,price:number}
    isLoading:boolean
}
