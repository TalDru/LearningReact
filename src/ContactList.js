import React from 'react'
import './ContactList.css'

class ContactList extends React.Component {
  handleRemoval = (index) => {
    this.props.handleRemoval(index);
    this.forceUpdate();
  }

  render () {
    return (
      <ul className="ContactList">
        {this.props.contacts.map((item, index) => (
          <li onClick={() => this.handleRemoval(index)} key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
