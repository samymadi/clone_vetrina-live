//system imports
import { useContext } from "react"

//context
import { ErrorStatusContext } from "src/navigation/components/ErrorHandler"


export const useErrorHandler = ()=>{
        return useContext(ErrorStatusContext);
}