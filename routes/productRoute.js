const express=require("express");
const controller=require("../controller/productController");
const validator=require("../middleware/validator");
const router=express.Router();

router.route("/product")
      .get(controller.getAllProduct)


router.route("/product/:id")
      .get(controller.getProductById)

module.exports=router;