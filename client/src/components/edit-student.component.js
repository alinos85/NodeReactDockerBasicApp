// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {
const [formValues, setFormValues] = useState({
	id:0,
	name: '',
	email: '',
	rollno: '',
});
const { id } = useParams();
let navigate = useNavigate();
	
//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/students/edit-student/" +id,studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		navigate("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	console.log("my id ........ "+ id)
	axios
	.get(
		"http://localhost:4000/students/edit-student/"
		+id
	)
	.then((res) => {
		const {name, email, rollno } = res.data;
		console.log(res)
		console.log("id :"+id + " name: "+name +" rollno : "+ rollno )
		setFormValues({ id,name, email, rollno });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
