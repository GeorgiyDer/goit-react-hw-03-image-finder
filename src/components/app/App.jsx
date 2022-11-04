import React from 'react';
import { nanoid } from 'nanoid'
import Form from '../form/form';
import ContactsList from '../contactsList/contactList';
import Filter from '../filter/filter';
import { StyledDiv, StyledH1, StyledH2 } from './App.styled'


class App extends React.Component { 
  
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: '',
  }

    componentDidMount() { 
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) { 
      this.setState({contacts: parsedContacts})
    }
    
  }

  componentDidUpdate(prevProps, prevState) { 
    if (this.state.contacts !== prevState.contacts) { 
      
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  formSubmitHendler = data => { 
    const oldName = this.state.contacts.map(contact => contact.name);
    if (oldName.includes(data.name)) {
      return alert(`${data.name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
    
    this.setState(prevState => ({
      contacts:[contact, ...prevState.contacts]
    }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };



  render() { 
    const { filter } = this.state;
    
    const normalizedFilter = filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <StyledDiv>
        <StyledH1>Phonebook</StyledH1>
        <Form onSubmit={this.formSubmitHendler} />
        <StyledH2>Contacts</StyledH2>
        <Filter value={filter} onFilter={this.changeFilter} />
        <ContactsList contacts={visibleContact} onDelete={this.deleteContact} />
      </StyledDiv>
    )
  }

}

export default App;
