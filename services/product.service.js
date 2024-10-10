const { QueryTypes, UUIDV4 } = require("sequelize");
const db = require("../utilities/database");
const { v4: uuidv4 } = require('uuid');

const creatProduct = async (product,embedding) => {
    const escapeString = (str) => (typeof str === 'string' ? str.replace(/'/g, "''") : '');
     // unique id for each product
    const id = uuidv4();
    let query = `
        INSERT INTO Products (id, title, description, category, brand, size, suggestion, allegations, vectorEmbedding, createdAt, updatedAt)
        VALUES ('${id}', '${escapeString(product.title)}', '${escapeString(product.description)}', '${escapeString(product.category)}', '${escapeString(product.brand)}', '${escapeString(product.size)}', '${escapeString(JSON.stringify(product.suggestion))}', '${escapeString(JSON.stringify(product.allegations))}', JSON_ARRAY_PACK("[${embedding}]"), NOW(), NOW());
    `;
    const createProduct = await db.query(query, {
        type: QueryTypes.INSERT
    });
return createProduct; 
}

const searchProduct = async (embedding) => {
    let selectQuery = `
    SELECT *, dot_product(vectorEmbedding, JSON_ARRAY_PACK("[${embedding}]")) AS score
    FROM Products
    ORDER BY score DESC
    LIMIT 5;
   `;
    const searchResults = await db.query(selectQuery, {
         type: QueryTypes.SELECT
    });
    return searchResults;

}

module.exports = {
    creatProduct,
    searchProduct
}