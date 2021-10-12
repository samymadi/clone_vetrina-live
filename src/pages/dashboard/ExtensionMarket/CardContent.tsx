import {memo} from 'react';

//Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//component 
import { ExtensionContainer } from 'src/components/reusable';

//css module
import style from './style.module.css';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const CardContent = () => {
    return (
        <Carousel 
                containerClass={style.container} 
                itemClass={style.item_container} 
                responsive={responsive} 
                infinite  
                arrows={false} 
                centerMode 
                minimumTouchDrag={100}>
                    <ExtensionContainer/>
                    <ExtensionContainer/>
                    <ExtensionContainer/>
                    <ExtensionContainer/>
                    <ExtensionContainer/>
        </Carousel>
    );
}

export default memo(CardContent);
