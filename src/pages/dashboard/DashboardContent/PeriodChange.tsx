import {memo,useState,useEffect} from 'react';
import { StringMappingType } from 'typescript';



//usign function as childre
const PeriodChange = ({children}:Props) => {


    const [value,setValue] = useState<number>(0);
    const [periodeView,setPeriodView] = useState<string>('day')

    useEffect(()=>{
            handleChange();
    },[value])

    const handleChange = ()=>{
        switch (value) {
            case 0: setPeriodView('day'); break;
            case 1: setPeriodView('week'); break;
            case 2: setPeriodView('month'); break;        
            default:
                break;
        }
    }


    return (
        <>
            {children({value,setValue,periodeView})}            
        </>
    );
}

export default memo(PeriodChange);

interface Props{
    children : (p:PeriodeFunction)=>JSX.Element
}



export interface PeriodeFunction{
    value:number,
    setValue:React.Dispatch<React.SetStateAction<number>>
    periodeView:string
}