import {schema} from '../model/productSchema.js';
const getProducts = async (request,response)=>{
    try{
        let products = await schema.find({});
        response.json(products);
    }catch(error){
        console.log(error.message);
    }
};
const getProductById = async (request,response)=>{
    try{
        let product = await schema.findOne({'id':request.params.id});
        response.json(product);
    }catch(error){
        console.log(error.message);
    }
};
export {getProducts,getProductById};