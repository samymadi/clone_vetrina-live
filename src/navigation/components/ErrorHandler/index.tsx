//system imports 
import {createContext, useState} from 'react';


// customs components 
import { ErrorPage } from 'src/pages';

export let ErrorStatusContext:any 

const Index = ({children}:Props) => {

    const [httpErrorStatus,setHttpErrorStatus] =useState<number>(200);
    ErrorStatusContext= createContext<React.Dispatch<React.SetStateAction<number>>>(setHttpErrorStatus)
    
    
    
    
    const renderError =()=>{
          switch(httpErrorStatus){
                case 404 :return <ErrorPage/>
                default  :return children //return the current page 
          }
    }


    return (
        <ErrorStatusContext.Provider value={setHttpErrorStatus}>
                {renderError()}
        </ErrorStatusContext.Provider>
    );
}

export default Index;


interface Props {
    children?:JSX.Element | JSX.Element[]
}

