const mongoose = require("mongoose");

const Product = mongoose.model("Product");

const find = async (req, res) => {
    const { page } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });
    return res.json(products);
}

const create = async (req, res) => {
    const product = await Product.create(req.body);
    return res.json(product);
}

const findById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.json(product);
}

const update = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(product);
}

const remove = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    return res.send();
}

module.exports = {
    find,
    create,
    findById,
    update,
    remove
}