import {CardMedia,IconButton,Stack } from "@mui/material";
import {Link} from 'react-router-dom';
import Icons from "../Icons";
import Logo from '../../assets/Logo/logo.svg';


const Header = ({setDrawerIsOpen}:Props) => {


    const handleClick = ()=>{
        setDrawerIsOpen(prev=>!prev);
    }


    return (
        <Stack 
            direction='row' 
            alignItems='center'
            justifyContent='space-between'
            mb="20px"
            mt='7px'
            ml='5px'
            pr='10px'>
                <Link to='/'>
                        <CardMedia 
                            component='img' 
                            src={Logo}/>
                </Link> 
                <IconButton onClick={handleClick}>
                        <Icons 
                            iconName='menu' 
                            fontSize='20px'/>
                </IconButton>
        </Stack>    
    );
}

export default Header;


interface Props{
    setDrawerIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}