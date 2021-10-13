import { request } from "../config";
import { Blog_EndPoint,Extensions_EnPoint,Shop_Info_EndPoint } from "./endPoints";
import ApiResponse from "src/Models/Api";




export const getBlogs = async():Promise<ApiResponse>=>{
      
    try{
     const response = await request.get(Blog_EndPoint());
        const {status,data} =response

            if(status === 200) return new ApiResponse(data,status);
            
                else 
                 return new ApiResponse(null,status,response);
    }
    catch(e){
            return new ApiResponse(null,0,e);
    }
    
}


export const getExtensions = async():Promise<ApiResponse>=>{


    try{
        const response = await request.get(Extensions_EnPoint(3098));
        const {status,data} =response

            if(status === 200) return new ApiResponse(data,status);
            
                else 
                 return new ApiResponse(null,status,response);

    }catch(e){
            return new ApiResponse(null,0,e);   
    }
} 


export const getShopInfo = async():Promise<ApiResponse>=>{
    
    
    try{
        const response = await request.get(Shop_Info_EndPoint(3098));
        const {status,data} =response

            if(status === 200) return new ApiResponse(data,status);
            
                else 
                 return new ApiResponse(null,status,response);

    }catch(e){
            return new ApiResponse(null,0,e);   
    }
}






