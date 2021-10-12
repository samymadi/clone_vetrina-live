import { request } from "../config";
import { Blog_EndPoint } from "./endPoints";
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