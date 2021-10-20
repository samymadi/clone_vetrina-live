//system imports 
import {Link} from 'react-router-dom';


//third party imports 
import {CardMedia,IconButton,Stack } from "@mui/material";


//custom components imports
import Icons from "../../../components/Icons";


//assets imports 
import Logo from '../../../assets/Logo/logo.svg';



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
            ml='10px'
            pr='5px'>
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