import React from 'react';
import ApptCard from './ApptCard';

class ApptList extends React.Component {
  render() {
    const appts = this.props.appointments.map((appt, i) => {
      return (
        <div id={i} key={i} className="column is-4">
          <ApptCard
            deleteAppointment={this.props.deleteAppointment}
            thisId={i}
            thisAppt={appt}
          />
        </div>
      );
    });
    // const appointments = this.props.appointments
    return <div className="container">{appts}</div>;
  }
}

export default ApptList;
