const {
  insertToDb,
  findAllFromDb,
  updateToDB,
  deleteFromDB,
} = require("../database/connection");

// Data Insertion

const insertEmployeeData = async function (req, res) {
  const empData = req.body;
  try {
    if (empData && empData.length > 0) {
      const insertResponse = await insertToDb(empData);
      return res.status(200).send({ success: insertResponse.acknowledged });
    }
  } catch (error) {
    console.log("Error  in saving data", error);
    return res.status(200).send({ message: "something went wrong" });
  }
};

// query
const getQuery1Data = async function (req, res) {
  try {
    const students = await findAllFromDb();
    return res.status(200).send({ studentData: students });
  } catch (error) {
    console.log("Error  in  fetching data", error);
    return res.status(200).send({ message: "something went wrong" });
  }
};

const getQuery2Data = async function (req, res) {
  const query = { salary: { $gt: "30000" } };
  console.log("query", query);
  try {
    const students = await findAllFromDb(query);
    return res.status(200).send({ studentData: students });
  } catch (error) {
    console.log("Error  in  fetching data", error);
    return res.status(200).send({ message: "something went wrong" });
  }
};
const getQuery3Data = async function (req, res) {
  const query = { overallExp: { $gt: "2" } };
  console.log("query", query);
  try {
    const students = await findAllFromDb(query);
    return res.status(200).send({ studentData: students });
  } catch (error) {
    console.log("Error  in  fetching data", error);
    return res.status(200).send({ message: "something went wrong" });
  }
};

const getQuery4Data = async function (req, res) {
  const query = { yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } };
  console.log("query", query);
  try {
    const students = await findAllFromDb(query);
    return res.status(200).send({ studentData: students });
  } catch (error) {
    console.log("Error  in  fetching data", error);
    return res.status(200).send({ message: "something went wrong" });
  }
};

const getQuery5Data = async function (req, res) {
  const filter = { salary: { $gt: "70000" } };
  const update = { salary: "65000" };
  const changedData = {
    $set: update,
  };
  try {
    const students = await updateToDB(filter, changedData);

    return res.status(200).send({ success: students.acknowledged });
  } catch (error) {
    console.log("Error  in  updating data", error);
    return res.status(200).send({ message: "something went wrong" });
  }
};

// delete ops
const getQuery6Data = async function (req, res) {
  const query = { lastCompany: "Y" };
  try {
    const students = await deleteFromDB(query);
    return res.status(200).send({ "Deleted the data -> ": query });
  } catch (error) {
    console.log("Error  in deleting data", error);
    return res.status(200).send({ message: "something went wrong" });
  }
};

module.exports = {
  insertEmployeeData,
  getQuery1Data,
  getQuery2Data,
  getQuery3Data,
  getQuery4Data,
  getQuery5Data,
  getQuery6Data,
};
