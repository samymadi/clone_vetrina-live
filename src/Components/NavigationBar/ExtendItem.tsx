import {memo} from 'react'
import {
        Accordion,
        AccordionDetails,
        AccordionSummary,List} from '@mui/material'

import Icons from '../Icons';

import SubTitles from './SubTitles';


//style 
import {accordionStyle,
        accordionSummaryStyle,
        accordionDetailsStyle,
        listStyle} from './style'


const ExtendItem = ({children,subItems}:Props):JSX.Element => {
    return (
     
        <Accordion  sx={accordionStyle}>
            <AccordionSummary 
                    expandIcon={<Icons 
                                    iconName='chevron-down' 
                                    fontSize='20px' />}
                    sx={accordionSummaryStyle}>
    
            {children}
            </AccordionSummary >
            
            <AccordionDetails sx={accordionDetailsStyle} >
                    <List sx={listStyle}>
                        {subItems?.map((text:string,index:number)=>
                            (<SubTitles  
                                text={text} 
                                key={index} />
                            ))
                        }
                    </List>
            </AccordionDetails>
        </Accordion>
    );
}

export default memo(ExtendItem);

interface Props {
    children:any
    subItems?:string[]
}
