import './App.css';
import {Container, Row, Col } from 'react-bootstrap'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Student from './Components/Student';
import StudentList from './Components/StudentList';

function App() {
  const marginTop = {
    marginTop:"20px"
  };
  return (
    <Router>
      <NavigationBar></NavigationBar>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Switch><Route path="/" exact component={Home} /></Switch>
              <Switch><Route path="/add" exact component={Student} /></Switch>
              <Switch><Route path="/view" exact component={StudentList} /></Switch>
            </Col>
          </Row>
        </Container>
    </Router >
  );
}

export default App;
