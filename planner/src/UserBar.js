import React from 'react';
import ApptList from './ApptList';

class UserBar extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      date: '',
      userId: '',
      content: '',
      location: ''
    };
  }
  componentDidUpdate = () => {
    const user = this.props.thisUser.id;
    // console.log(user);
    if (this.props.thisUser && this.state.userId === '') {
      this.setState({ userId: user });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitAppointment = () => {
    const myState = this.state;
    const body = {
      title: myState.title,
      date: myState.date,
      user_id: myState.userId,
      content: myState.content,
      location: myState.location
    };
    fetch('http://localhost:3000/api/v1/appointments', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(newAppt => this.props.addAppointment(newAppt));
  };

  render() {
    const myUser = this.props.thisUser;
    return (
      <div>
        <h4>Welcome {myUser.full_name}</h4>
        <div className="column is-4">
          <div className="field">
            <div className="control">
              <input
                className="input"
                onChange={this.handleChange}
                type="text"
                name="title"
                placeholder="what is it again?"
                value={this.state.title}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                onChange={this.handleChange}
                type="text"
                name="date"
                placeholder="when is this...?"
                value={this.state.date}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                onChange={this.handleChange}
                type="text"
                name="content"
                placeholder="...and?"
                value={this.state.content}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                onChange={this.handleChange}
                type="text"
                name="location"
                placeholder="WHERE?!?"
                value={this.state.location}
              />
            </div>
          </div>

          <button onClick={this.submitAppointment} className="button is-danger">
            Add Appointment
          </button>
        </div>
        <div className="container">
          {this.props.thisUser === '' ? null : (
            <ApptList
              appointments={this.props.appointments}
              deleteAppointment={this.props.deleteAppointment}
            />
          )}
        </div>
      </div>
    );
  }
}

export default UserBar;
