const productSchema=require("../model/productModel");

exports.getAllProduct=(requset,response,next)=>{
        productSchema.find()
                    .then(data=>{
                      response.status(200).json(data)
                    })
                    .catch(error=>next(error))
  }

exports.getProductById=(request,response,next)=>{
  productSchema.findOne({id:request.params.id})
  .then(data=>{
    if(data){
      response.status(200).json(data)
    }else{
      throw new Error(" Validation Product Error")
    }
    
  })
  .catch(error=>next(error))
    
 }
