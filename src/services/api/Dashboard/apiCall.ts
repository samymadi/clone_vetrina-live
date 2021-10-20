import { request } from "../config";
import { Blog_EndPoint,Extensions_EnPoint,Shop_Info_EndPoint } from "./endPoints";
import ApiResponse from "src/Models/Api";
import { handleCall,Response } from "../handleApiCall";




export const getBlogs = async():Promise<ApiResponse>=>{

        //handle the error with try catch bloc 
        const {result,error} = await handleCall(()=>request.get(Blog_EndPoint()));

        //if error true 
        if(error) return new ApiResponse(null,0,error);
        
        //handle the result
        else {
            const {status,data} =result
                if(status === 200) return new ApiResponse(data,status);
                    else return new ApiResponse(null,status,result);
        }

    
}


export const getExtensions = async():Promise<ApiResponse>=>{


     //handle the error with try catch bloc 
     const {result,error} = await handleCall(()=>request.get(Extensions_EnPoint(3098)));

     if(error) return new ApiResponse(null,0,error);      
    
        else {
            const {status,data} =result
                if(status === 200) return new ApiResponse(data,status);
                    else  return new ApiResponse(null,status,result);
        }   

    
} 


export const getShopInfo = async():Promise<ApiResponse>=>{
    
    
    const {result,error} = await handleCall(()=>request.get(Shop_Info_EndPoint(3098)));
        if(error)  return new ApiResponse(null,0,error);
            else {
                const {status,data} = result
                    if(status === 200) return new ApiResponse(data,status);
                        else return new ApiResponse(null,status,result);
            }

    
}