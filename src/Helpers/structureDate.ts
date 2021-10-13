export const ToExtensionsArray = (data:any)=>
                                Object.keys(data).map((key)=>data[key]).concat().flat(1);
