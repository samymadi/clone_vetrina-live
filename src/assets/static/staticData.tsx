
import {ReactComponent as Home} from '../Icon/home.svg';
import {ReactComponent as ShoppingCart} from '../Icon/shopping-cart.svg';
import {ReactComponent as List} from '../Icon/list.svg';
import {ReactComponent as User} from '../Icon/user.svg';
import {ReactComponent as Target} from '../Icon/target.svg';
import {ReactComponent as Truck} from '../Icon/truck.svg';
import {ReactComponent as DollarSign} from '../Icon/dollar-sign.svg';
import {ReactComponent as Brush} from '../Icon/brush.svg';
import {ReactComponent as CreditCard} from '../Icon/credit-card.svg';
import {ReactComponent as Facebook} from '../Icon/facebook.svg';
import {ReactComponent as CogPlanet} from '../Icon/Cog Planet.svg';
import {ReactComponent as NewApp} from '../Icon/new app.svg';
import {ReactComponent as Settings} from '../Icon/settings.svg';
import {ReactComponent as LogOut} from '../Icon/log-out.svg';
import {ReactComponent as HelpCircle} from '../Icon/help-circle.svg';
import {ReactComponent as Share2} from '../Icon/share-2.svg';
import {ReactComponent as Eye} from '../Icon/eye.svg';

export interface NavBarItem{
    text:string,
    icon:JSX.Element
    extend?:boolean
    subItems?:string[]
}

export const navBarItem:NavBarItem[] =[
    {text:'Dashboard',icon:<Home/>},
    {text:'Catalogue',icon:<ShoppingCart/>,extend:true,subItems:[
        'Discount codes',
        'Exit intent',
        'Checkout Features',
        'Cart abandonment',
        'Timer checkout',
        'Sell on Social',
        'Special Offer',
        'Seasonal Offer',

    ]},
    {text:'Orders',icon:<List/>},
    {text:'Customer',icon:<User/>},
    {text:'Marketing',icon:<Target/>,extend:true,subItems:[
        
        'Special Offer',
        'Seasonal Offer',

    ]},
    {text:'Delivery Options',icon:<Truck/>},
    {text:'Payement Options',icon:<DollarSign/>},
    {text:'Store Design',icon:<Brush/>},
    {text:'Subscription',icon:<CreditCard/>},
    {text:'Sell on Social',icon:<Facebook/>},
    {text:'integration',icon:<CogPlanet/>},
    {text:'Extension',icon:<NewApp/>},
    {text:'Settings',icon:<Settings/>},
    {text:'Log out',icon:<LogOut/>},
    
]

export const navBarItem2:NavBarItem[] =[
    {text:'Customer Support',icon:<HelpCircle/>},
    {text:'Share your shop',icon:<Share2/>},
    {text:'View your shop ',icon:<Eye/>}
]

