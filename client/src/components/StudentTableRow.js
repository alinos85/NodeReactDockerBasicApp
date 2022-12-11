import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
const { id, name, email, rollno } = props.obj;

const deleteStudent = () => {
	axios
	.delete(
"http://localhost:4000/students/delete-student/" + id)
	.then((res) => {
		if (res.status === 200) {
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{rollno}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-student/" + id}>
		Edit
		</Link>
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default StudentTableRow;
