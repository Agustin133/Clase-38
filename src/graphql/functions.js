const {options} = require('../infrastructure/mariaDB')
const knex = require('knex')(options);
const moment = require('moment');

async function getProducts() {
    const response = await knex('product').select('*');
    return response;
}; 

async function getProductById(data) {
    const response = await knex('product').select().where(data);
    return response[0];
};

async function addProduct(data) {
    let timestamp = moment().format('lll');
    const dataToInsert = {
        title: data.title,
        price: data.price,
        stock: data.stock,
        code: data.code,
        thumbnail: data.thumbnail,
        timestamp: timestamp,
        description: data.description
    }
    const response = await knex('product').insert(dataToInsert);
    return response[0];
};

module.exports = {
    getProducts,
    getProductById,
    addProduct
};