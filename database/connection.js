const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const database = client.db("humanResource");
const collection = database.collection("employee");

const insertToDb = async (data) => {
  try {
    await client.connect();
    const employeeData = await collection.insertMany(data);
    await client.close();
    return employeeData;
  } catch (error) {
    return error.message;
  }
};

const findAllFromDb = async (query) => {
  try {
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse;
  } catch (error) {
    return error.message;
  }
};

const updateToDB = async (filter, changedData) => {
  try {
    await client.connect();
    const dbResponse = await collection.updateMany(filter, changedData);
    await client.close();
    return dbResponse;
  } catch (error) {
    return error.message;
  }
};

const deleteFromDB = async (query) => {
  try {
    await client.connect();
    const dbResponse = await collection.deleteMany(query).toArray();
    await client.close();
    return dbResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = { insertToDb, findAllFromDb, updateToDB, deleteFromDB };
