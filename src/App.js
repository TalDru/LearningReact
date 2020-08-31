import React, { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm.js';
import ContactList from './ContactList.js';

function App() {
  const[contacts, setContacts] = useState([])

  function addContact (name) {
    setContacts([...contacts, name]);
  }

  function removeContact (indexToRemove) {
    var newContacts = contacts;
    newContacts.splice(indexToRemove, 1);
    setContacts(newContacts);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="App-title">
        Contact Manager
      </div>
      <ContactForm handleSubmit={addContact}/>
      </header>
      <ContactList contacts={contacts} handleRemoval={removeContact}/>
      <footer>
      </footer>
    </div>
  );
}

export default App;
