// system imports 
import {memo} from 'react';


//third party imports 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//custom components imports 
import { ExtensionContainer } from 'src/components/reusable';


//css imports 
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


const CardContent = ({extensions}:Props) => {

    const isEmpty = extensions.length === 0;
    
    return (
        <Carousel 
                containerClass={style.container} 
                itemClass={style.item_container} 
                responsive={responsive} 
                infinite  
                arrows={false} 
                centerMode 
                minimumTouchDrag={100}>

                  {!isEmpty &&
                      extensions.map((exte:any)=> 
                          <ExtensionContainer 
                                extension={exte} 
                                key={exte.id}/>)
                  }
                  
        </Carousel>
    );
}

export default memo(CardContent);


interface Props{
  extensions:any
}
