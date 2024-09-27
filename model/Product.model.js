var mongoose=require('mongoose')
const { Schema }=mongoose;

const ProductSchema=new Schema(
{
 "id":Number,

 "title":String,

 "price":Number,
 "description":String,
 "category":String,
 "image":String
}
);
const Product=mongoose.model('Product', ProductSchema)
module.exports=Product;