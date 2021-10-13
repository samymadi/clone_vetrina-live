
import {Link} from 'react-router-dom'
import { Stack, Theme, Typography } from '@mui/material';
import Icons from '../../Icons';


//style 
import { linkStyle,stackStyle } from './style';


import LinkContent from './LinkContent';
import { SxProps } from '@mui/system';


const StyledLink = (props:Props):JSX.Element => {

    const {title,externalLink,color,iconName,target,to,...rest} =props

    return   externalLink ?  <a 
                                    href={to} 
                                    target={target} 
                                    style={{textDecorationColor:color,fontSize:rest.fontSize}}>
                                        
                                        <LinkContent {...props}/>
                             </a>
                          :  <Link 
                                    {...props} 
                                    style={linkStyle(color)}>   
                                    <LinkContent {...props} />
                             </Link>
  
}

export default StyledLink;


export interface Props{
    to:string
    title:string
    externalLink?:boolean
    target?:string
    color?:string
    iconName?:string
    fontSize?:string
    sx?:SxProps<Theme>
}
