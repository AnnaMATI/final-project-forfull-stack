// const {Product} = require('./index');
const{checkAdmin}=require("../adminpage/checkadmin")
const fs = require('fs')
const { Product } = require("../models");

async function getAllProducts (req, res) {
  try {
   
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


async function getProductById (req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

function createProduct(req, res){
  const isAdmin = checkAdmin(req, res);
  if(isAdmin){
    const {name, price, image,   categoryID} = req.body;
  
    const newProduct = {
        name:name,
        price:price,
        image:image,
        count:1,
        categoryID:categoryID,
    }
    Product.create(newProduct).then((product)=>{
        res.status(201).json(product)
      }).catch((err)=>{
        res.status(500).json({error: err.message})
      })
  } 
}

function updateProduct(req,res){
  const isAdmin = checkAdmin(req, res);
  if(isAdmin){
    const {name, price,count, image, categoryId, id} = req.body;
    Product.update({name, price, description, img, categoryId},{where:{id}}).then(()=>{
        res.json({response:'updated'})
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
  }
}

function deleteProduct(req,res){
  const isAdmin = checkAdmin(req, res);
  if(isAdmin){
    const {id} = req.body;
    Product.destroy({where:{id}}).then(()=>{
        res.json({response:'deleted'})
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    }) 
   
}}
function images(req, res){
    const image_name = req.params.name
    fs.readFile(`./img/${image_name}`, function (err, data) {
        if (err) {
            return res.send(err);
        } else {
            res.send(data);
        }
    });
};

function upload(req, res){
  if(req.file){
      res.json(req.file)
  }else{
      res.json('failed to add image')
  }
};

module.exports = {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct, images,upload}