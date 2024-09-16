const db = require('../Model');

const Review = db.reviews;

const addReview = async (req, res) => {

    let data = {
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data);
    res.status(201).send(review);

}

const getAllReview = async (req, res) => {
    let reveiws = await Review.findAll({});

    res.status(200).send(reveiws);

}

const getReviewById = async (req, res) => {

    let id = req.params.id;

    const review = await Review.findByPk(id);

    res.status(200).send(review);
}

const updateReview = async (req, res) => {

    let id = req.params.id;

    const review = await Review.update(req.body, { where: { id: id } });

    res.status(200).send(review);


}

const deleteReview = async (req, res) => {

    let id = req.params.id;

    await Review.destroy({ where: { id: id } });

    res.status(200).send('product deleted successfully..!');
}


module.exports = {
    addReview,
    getAllReview,
    getReviewById,
    updateReview,
    deleteReview

}