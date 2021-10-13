export const Blog_EndPoint = ():string=> '/api/blog-posts'
export const Extensions_EnPoint =(shop_id:number):string=>`/api/admin/store-features?shop_id=${shop_id}`
export const Shop_Info_EndPoint = (shop_id:number):string=>`/api/admin/dashboard?shop_id=${shop_id}`
