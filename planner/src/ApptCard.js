import React from 'react';

class ApptCard extends React.Component {
  render() {
    const me = this.props.thisAppt;
    return (
      <div className="card">
        <div className="card-header">
          <p className="title is-4">{me.title}</p>
          <div className="card-content">
            <p>{me.location}</p>
            <p>{me.content}</p>
          </div>
        </div>
        <div className="card-footer">
          <button
            onClick={this.props.deleteAppointment}
            id={this.props.thisId}
            className="is-danger card-footer-item"
          >
            Delete Appointment
          </button>
          <button className="is-outlined card-footer-item">{me.date}</button>
        </div>
      </div>
    );
  }
}

export default ApptCard;
