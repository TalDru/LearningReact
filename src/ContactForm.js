import React from 'react';
import './ContactForm.css'

class ContactForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  handleSubmit = (e) => {
    var name = this.state.name.trim()
    if (name !== '') {
      this.props.handleSubmit(name);
      this.setState({name: ''});
    }
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  render () {
    return (
    <div className="ContactForm">
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="formText" placeholder="Input a new name"
        value={this.state.name} onChange={this.handleChange}/>
        <input type="submit" id="formButton" value="Add contact" />
      </form>
    </div>
    );
  }
}

export default ContactForm;
