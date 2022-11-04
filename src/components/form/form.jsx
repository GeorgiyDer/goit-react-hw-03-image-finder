import React from 'react';
import PropTypes from 'prop-types';
import { StyledDivForm, StyledForm, StyledLable, StyledButton, StyledInput} from './form.styled'

class Form extends React.Component { 
state = {
  name: '',
  number: ''
}
  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value})
  }
  
  formSubmit = (e) => { 
    e.preventDefault(); 
    
    this.props.onSubmit(this.state)
    
    this.reset();
  }

  reset = () => { 
    this.setState({ name: '', number: '' })
  }
  
  render() { 
    return (
      <StyledDivForm>
        <StyledForm onSubmit={this.formSubmit}>
          <StyledLable>Name <StyledInput
            type="text"
            value={this.state.name} onChange={this.inputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </StyledLable>
          <StyledLable>Number <StyledInput
            type="tel"
            value={this.state.number} onChange={this.inputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </StyledLable>

          <StyledButton type='submit'>add contact</StyledButton>
        </StyledForm>
        
      </StyledDivForm>
    )
  }
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    
};

export default Form