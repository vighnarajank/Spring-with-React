import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                <div className="container">
                  <h1 className="display-4">Welcome to Student Management</h1>
                  <p className="lead">You can do CRUD using this website</p>
                </div>
              </div>
            </>
        )
    }
}
