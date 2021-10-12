export default class ApiResponse{
    
    error:any
    data:any
    statusCode:number

    constructor(data:any,statusCode:number,error?:any) {
            this.data=data
            this.error=error
            this.statusCode=statusCode
        
    }
    

}