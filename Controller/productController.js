
const db = require("../Model");

//create main model

const Product = db.products;
const Review = db.reviews;

//addProduct

const addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    }

    const product = await Product.create(info);
    res.status(201).send(product);
    console.log(product);
}

//getAllProducts

const getAllProduct = async (req, res) => {

    let products = await Product.findAll({
        attributes: [
            'id',
            'title',
            'price'
        ]
    });

    res.status(200).send(products);
}

//getOneProduct

const getOneProduct = async (req, res) => {

    let id = req.params.id;
    let product = await Product.findOne(
        {
            where: {
                id: id
            }
        }
    )

    res.status(200).send(product);
}

//updateProduct

const updateProduct = async (req, res) => {

    let id = req.params.id;

    const product = await Product.update(req.body, { where: { id: id } });

    res.status(200).send(product);


}

//deleteProduct

const deleteProduct = async (req, res) => {

    let id = req.params.id;

    await Product.destroy({ where: { id: id } });

    res.status(200).send('product deleted successfully..!');
}

//publishedProducts

const publishedProducts = async (req, res) => {


    let poducts = await Product.findAll({ where: { published: true } });

    res.status(200).send(poducts);
}

//isFindByTitle

const isFindByTitle = async (req, res) => {

    let title = req.body.title;
    let product = await Product.findOne(
        {
            where: {
                title
            }
        }
    )
   // res.status(200).send(product ? true:false);
    res.status(200).send(product);
}


module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    publishedProducts,
    isFindByTitle
}



