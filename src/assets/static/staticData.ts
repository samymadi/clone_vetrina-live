
export interface NavBarItem{
    text:string,
    iconName:string
    extend?:boolean
    subItems?:string[]
}

export const navBarItem:NavBarItem[] =[
    {text:'Dashboard',iconName:'home'},
    {text:'Catalogue',iconName:'shopping-cart',extend:true,subItems:[
        'Discount codes',
        'Exit intent',
        'Checkout Features',
        'Cart abandonment',
        'Timer checkout',
        'Sell on Social',
        'Special Offer',
        'Seasonal Offer',

    ]},
    {text:'Orders',iconName:'list'},
    {text:'Customer',iconName:'user'},
    {text:'Marketing',iconName:'target',extend:true,subItems:[
        
        'Special Offer',
        'Seasonal Offer',

    ]},
    {text:'Delivery Options',iconName:'truck'},
    {text:'Payement Options',iconName:'dollar-sign'},
    {text:'Store Design',iconName:'brush'},
    {text:'Subscription',iconName:'credit-card'},
    {text:'Sell on Social',iconName:'facebook'},
    {text:'integration',iconName:'Cog Planet'},
    {text:'Extension',iconName:'new app'},
    {text:'Settings',iconName:'settings'},
    {text:'Log out',iconName:'log-out'},
    
]

export const navBarItem2:NavBarItem[] =[
    {text:'Customer Support',iconName:'help-circle'},
    {text:'Share your shop',iconName:'share-2'},
    {text:'View your shop ',iconName:'eye'},
]

