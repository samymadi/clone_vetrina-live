import {ListItem, Typography} from '@mui/material';
import { Link } from 'src/components/reusable';
//style
import { linkStyleSubTitles,listItemStyle,typoSubTitleStyle } from './style';


const SubTitles = ({text}:{text:string}) => {
    return (
      <Link to={`/${text}`} 
            >
            <ListItem sx={listItemStyle}>
                <Typography   sx={typoSubTitleStyle} color='primary'>
                    {text}
                </Typography>
            </ListItem>
            
      </Link>  
    );
}

export default SubTitles;
