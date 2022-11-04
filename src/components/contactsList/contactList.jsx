import React from 'react';
import PropTypes from 'prop-types';
import { StyledUl, StyledLi, StyledP, StyledButton } from './contactList.styled'

const ContactsList = ({ contacts, onDelete }) =>
    (<StyledUl>{contacts.map(contact =>
        (<StyledLi key={contact.id}><StyledP>{contact.name}:</StyledP>
            <StyledP>{contact.number}</StyledP>
            <StyledButton type='button' onClick={() => onDelete(contact.id)}>delete</StyledButton>
        </StyledLi>))}
    </StyledUl>);

ContactsList.propTypes = {
    contacts: PropTypes.array,
    onDelete: PropTypes.func,
};

export default ContactsList