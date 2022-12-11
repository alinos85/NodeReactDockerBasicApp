
let express = require("express");
const config = require('./db');
const mysql = require('mysql');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) {
      console.log("Error occurred with connection", err);
    } else {
      console.log("Connected to database");
    }
});


// CREATE Student
    function create(student){
        let message = ''

        const userDetails=[student.name,student.email,student.rollno];


       const result = connection.query(
          'INSERT INTO students (name, email, rollno)  VALUES (?, ?, ?)',userDetails
         ,function (err, result) {
        if (err) {
          console.log(err);
          message = 'Error in creating new student';
        }
        if(result){
            console.log("New student created");
            message = "New student created";
        }
    }
    );
    return {message}
  }

// READ Students
function get (callback){
  let students = null
  connection.query(
    "SELECT * FROM students"
     ,callback
  )
  connection.end;
  return students;

}

// UPDATE student
function update (id,student,callback){
  console.log("in update"+"id:"+id + " name: "+student.name)
  let sql = 'UPDATE `students` SET `name`=?,`email`=?,`rollno`=? WHERE `id` = ?';
    let values = [student.name, student.email, student.rollno,id]
   connection.query(sql,values, callback
);
}

// GET single student
function getStudent (id,callback){
    let updatedStudent;
   connection.query(
    `SELECT name,email,rollno FROM students
    WHERE id = ${id}`
     ,callback
);
}


// Delete Student
function deleteStudent (id){
    let message = ''
       const result = connection.query(
          `DELETE FROM students WHERE id = ${id}`
         ,function (err, result) {
        if (err) {
          console.log(err);
          message = 'Error in deleting student';
        }
        if(result){
            console.log("student deleted");
            message = "student deleted";
        }
    }
    );
    return {message}
}

module.exports = {
    create,get,update,deleteStudent,getStudent
  }
