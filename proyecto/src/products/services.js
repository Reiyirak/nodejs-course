const { ObjectId } = require('mongodb')
const { Database } = require('../database/index')
const { ProductsUtils } = require('./utils')

const COLLECTION = 'products'

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
}

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  // Making the id an object is something necessary for a MongoDB
  return collection.findOne({ _id: ObjectId(id) });
}

const create = async (product) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(product);
  return result.insertedId
}

const generateReport = async (name, res) => {
  let products = await getAll();
  ProductsUtils.excelGenerator(products, name, res);
}

// The key will be the function name and the value will be the result obtained from the function
module.exports.ProductsService = {
  getAll,
  getById,
  create,
  generateReport
}

