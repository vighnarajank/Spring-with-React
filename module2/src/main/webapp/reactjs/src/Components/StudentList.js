import React, { Component } from 'react'
import axios from 'axios'

import {Card, Table, ButtonGroup, Button} from 'react-bootstrap'

export default class StudentList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            students:[]
        };
    }
    
    componentDidMount(){
        this.getStudents();
    }
    
    getStudents(){
        axios.get("http://localhost:8080/product/getStudents")
        .then((response) => response.data)
        .then((data) => {
            this.setState({students:data});
            console.log(data);
        });
    }
    
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Student List</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>UserID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Marks</th>
                                <th>Grade</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">{this.state.students.length} Student Data Available!</td>
                                </tr> :
                                this.state.students.map((students) => (
                                    <tr key={students.userid}>
                                        <td>{students.userid}</td>
                                        <td>{students.name}</td>
                                        <td>{students.email}</td>
                                        <td>{students.marks}</td>
                                        <td>{students.grade}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary">Edit</Button>
                                                <Button size="sm" variant="outline-primary">Del</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}
