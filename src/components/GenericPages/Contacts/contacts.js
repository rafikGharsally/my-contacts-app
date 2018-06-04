import React, { Component } from 'react';

class contacts extends Component {

  render () {

  const { contacts } = this.props;

  return (
    <div>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Funct</th>
          </tr>
        </thead>
        <tbody>
        {contacts.data && contacts.data.length > 0 && contacts.data.map(n => {
          return (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.name}</td>
              <td>{n.email}</td>
              <td>{n.phone}</td>
              <td>...buttons goes here</td>
            </tr>
          )

        })

        }
        </tbody>

      </table>

    </div>

  )

}

}


export default contacts;
