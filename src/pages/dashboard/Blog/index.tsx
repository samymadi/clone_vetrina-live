import {memo,useEffect, useState} from 'react';



//components
import { Card } from 'src/components/reusable';
import BlogContent from './BlogContent';
import HeaderActions from './HeaderActions';


//services 
import {getBlogs} from '../../../services/api/Dashboard/apiCall';


const Index = ():JSX.Element => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        getLatestNewsBlogs();
    },[])


    const getLatestNewsBlogs= async()=>{
        const result = await getBlogs();
        if(result.error) console.log(result.error);
            else   setBlogs(result.data);   
    }


    return (
        <Card title='Latest news' icon='file-text' headerAction={<HeaderActions/>} >
            <BlogContent blogs={blogs}/>
        </Card>
    );
}

export default memo(Index);
