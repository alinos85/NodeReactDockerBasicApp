let studentDao = require("../database/studentDao"),
express = require("express"),
router = express.Router();

// CREATE Student
router.post('/create-student', function(req, res, next) {
    try {
      res.json( studentDao.create(req.body));
    } catch (err) {
      console.error(`Error while creating student`, err.message);
      next(err);
    }
  });

// READ Students
router.get('/', function(req, res, next) {
    try {
      console.log('student dao datas datas datas .....');
      studentDao.get(function (err, result) {
        if (err) {
          console.log(err);}
        if(result){
          console.log(result)
          res.json(result);
        }
      });
      
      
    } catch (err) {
      console.error(`Error while getting students `, err.message);
      next(err);
    }
  });


// Get a single student
router.get("/edit-student/:id", async function(req, res, next) {
    try {
      studentDao.getStudent(req.params.id, function (err, result) {
        if (err) {
          console.log(err);}
        if(result){
          const [student] = result
          console.log(student)
          res.json(student);
        }
    } )
    } catch (err) {
      console.error(`Error while getting a student`, err.message);
      next(err);
    }
  });


// Update Student Data
router.put("/edit-student/:id", function(req, res, next) {
    try {
      studentDao.update(req.params.id, req.body, function (err, result) {
        if (err) {
          console.log(err);}
        if(result){
          console.log('my update result...')
          console.log(result)
          res.json(result);
        }
    })

      
    } catch (err) {
      console.error(`Error while updating student`, err.message);
      next(err);
    }

  });


// Delete Student
router.delete("/delete-student/:id", function(req, res, next) {
    try {
      res.json(studentDao.deleteStudent(req.params.id));
    } catch (err) {
      console.error(`Error while deleting student`, err.message);
      next(err);
    }
  });

module.exports = router;
