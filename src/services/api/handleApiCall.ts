

export const handleCall = async(callBack:()=>Promise<any>)=>{
    
    const response:Response={result:undefined,error:undefined};
    
    try{
       response.result = await callBack();
    }
    catch(e:any){
        response.error=e;
    }

    return response
}




export interface  Response {
    result:any,
    error:Error |undefined
}