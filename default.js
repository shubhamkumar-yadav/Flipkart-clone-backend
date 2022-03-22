import { products } from "./constants/product.js";
import { schema } from "./model/productSchema.js";
const DefaultData = async ()=>{
    try{
        await schema.deleteMany({});
        await schema.insertMany(products);
        console.log('data imported');
    }catch(error){
        console.log(error.message);
    }
};
export {DefaultData};