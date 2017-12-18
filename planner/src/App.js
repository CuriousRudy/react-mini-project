import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import UserBar from './UserBar';
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userForm: '',
      allUsers: [],
      loggedIn: '',
      userAppointments: []
    };
  }

  //stores all users when the page mounts up
  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(allUsers => this.setState({ allUsers }));
  };

  //handles changes in the form on Navbar
  handleChange = e => {
    this.setState({
      userForm: e.target.value
    });
  };

  updateAppointments = newAppt => {
    const appts = this.state.userAppointments;
    this.setState({
      userAppointments: [...appts, newAppt]
    });
  };

  deleteAppointment = e => {
    let index = e.target.id;
    const appts = [...this.state.userAppointments];
    let target = appts.splice(index, 1);
    this.setState({
      userAppointments: [...appts]
    });
    fetch(`http://localhost:3000/api/v1/appointments/${target[0].id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
  };
  //log in user, updates state
  submitLogin = () => {
    let myUser = this.state.allUsers.filter(user => {
      return user.email === this.state.userForm;
    });
    this.setState({
      loggedIn: myUser[0]
    });
    this.setState({
      userForm: ''
    });
    this.setState({
      userAppointments: [...myUser[0].user_appointments]
    });
  };

  render() {
    console.log(this.state.userAppointments);
    return (
      <div className="App">
        <Navbar
          thisUser={this.state.userForm}
          handleChange={this.handleChange}
          logIn={this.submitLogin}
          userList={this.state.allUsers}
        />
        <div className="container">
          <UserBar
            updateUsers={this.updateUsers}
            thisUser={this.state.loggedIn}
            appointments={this.state.userAppointments}
            addAppointment={this.updateAppointments}
            deleteAppointment={this.deleteAppointment}
          />
        </div>
      </div>
    );
  }
}

export default App;
