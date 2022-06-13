import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm'

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  };

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => 
            <li key={contact.id}>{contact.name} {contact.number}</li>)}
        </ul>
      </div>
    )
  }
};
