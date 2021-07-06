import React, { Component } from 'react'
import axios from 'axios';

import {Card, Form, Button, Col} from 'react-bootstrap'

export default class Student extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = this.initState;
        
        this.addStudent = this.addStudent.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }
    
    initState = {
            email:'',
            name:'',
            marks:'',
        }
    
    addStudent = event => {
        const studDetails = {
            name : this.state.name,
            email : this.state.email,
            marks : this.state.marks,
        };
        event.preventDefault();
        
        axios.post("http://localhost:8080/product/addStudent",studDetails)
            .then(response => {
                if(response.data != null){
                    this.setState(this.initState);
                    alert("Datasaved");
                }
            })
    }
    
    resetStudent = () => {
        this.setState(() => this.initState);
    }
    
    nameChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    render() {
        const {name, email, marks} = this.state;
        
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Add Student</Card.Header>
                    <Form onReset={this.resetStudent} onSubmit={this.addStudent} id="studentForm">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>
                                        Name
                                    </Form.Label>
                                    <Form.Control required
                                        type="text" 
                                        name="name"
                                        value={name}
                                        onChange={this.nameChange}
                                        placeholder="Enter Name" 
                                        className={"bg-dark text-white"} 
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>
                                        E-Mail
                                    </Form.Label>
                                    <Form.Control required
                                        type="email" 
                                        name="email"
                                        value={email}
                                        onChange={this.nameChange}
                                        placeholder="Enter E-Mail" 
                                        className={"bg-dark text-white"} 
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridMarks">
                                    <Form.Label>
                                        Marks
                                    </Form.Label>
                                    <Form.Control required
                                        type="number" 
                                        min="0" 
                                        max="10"
                                        step="any"
                                        name="marks"
                                        value={marks}
                                        onChange={this.nameChange}
                                        placeholder="Enter Mark" 
                                        className={"bg-dark text-white"} 
                                    />
                                </Form.Group>
                            </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>{'\t'}
                        <Button size="sm" variant="info" type="reset">
                            Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }
}
