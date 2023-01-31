const express = require("express")
const router = express.Router();
const employeeController = require('../controllers/employee')

router.post('/employee',employeeController.insertEmployeeData)
router.get('/employeeQuery1',employeeController.getQuery1Data)
router.get('/employeeQuery2',employeeController.getQuery2Data)
router.get('/employeeQuery3',employeeController.getQuery3Data)
router.get('/employeeQuery4',employeeController.getQuery4Data)
router.get('/employeeQuery5',employeeController.getQuery5Data)
router.get('/employeeQuery6',employeeController.getQuery6Data)

module.exports = router;