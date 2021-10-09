import { Stack, Typography } from "@mui/material";
//icon 
import Icon from "../../Icons/index";


//Style 
import {typographyStyle} from './style';

const Header = (props: Props): JSX.Element => {

  const {icon,title,headerAction} = props;

  return (
        <Stack 
        direction="row" 
        alignItems="center" 
        justifyContent='space-between'>

            <Stack 
            direction='row' 
            alignItems="center" 
            mr='15px'>
               
                <Icon iconName={icon} />

                <Typography {...typographyStyle}>
                    {title}
                </Typography>

            </Stack >
            
            {headerAction}
        </Stack>
  );
};

export default Header;

interface Props {
  icon: string,
  title: string,
  headerAction?: JSX.Element;
}
