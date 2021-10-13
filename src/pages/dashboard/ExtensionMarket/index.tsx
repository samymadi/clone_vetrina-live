import {memo,useEffect,useState} from 'react';

//componet 
import { Card } from 'src/components/reusable';
import CardContent from './CardContent';
import Actions from './Actions';

//apiCalls

import { getExtensions } from 'src/services/api/Dashboard/apiCall';
import { ToExtensionsArray } from 'src/Helpers/structureDate';





const Index = () => {

    const [extensions,setExtensions] = useState<any>([]);
    
    console.log(extensions);

    useEffect(()=>{
        getExtensionData();
    },[])


    const getExtensionData = async()=>{
           const result = await getExtensions();
            if(result.error) console.log(result.error);
                else setExtensions(ToExtensionsArray(result.data));
                
    }


    return (
        <Card 
            title='Extensions Marketplace' 
            icon='new app' 
            actions={<Actions/>}
            >
                <CardContent extensions={extensions}/>
       </Card>
    );
}

export default memo(Index);
