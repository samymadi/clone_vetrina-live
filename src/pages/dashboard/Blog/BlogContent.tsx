import {memo} from 'react';



//material ui

import { Grid } from '@mui/material';



//component 
import BlogItem from './BlogItem';

const BlogContent = ({blogs}:Props) => {


    //check if the array is empty
    const isEmpty= blogs.length === 0

    return (
        <Grid 
            container 
            spacing={3}>
                {!isEmpty && 
                    blogs.map((blog:any)=>
                        <BlogItem blog={blog} key={blog.id}/>)
                }
        </Grid>
    );
}

export default memo(BlogContent);

interface Props{
    blogs:any
}
