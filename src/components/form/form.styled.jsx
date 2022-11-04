import styled from 'styled-components';

const StyledDivForm = styled.div`
    border: 1px solid black;
    padding: ${p => p.theme.space[5]}px;
    width: 400px;
    margin-bottom: ${p => p.theme.space[4]}px;
`


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    
`
const StyledLable = styled.label`
    display: flex;
    flex-direction: column;
    margin: ${p => p.theme.space[4]}px;
`

const StyledButton = styled.button`
    width: 100px;
    margin: ${p => p.theme.space[4]}px;
    cursor: pointer;
`

const StyledInput = styled.input`
    width: 200px;
`

export { StyledDivForm, StyledForm, StyledLable, StyledButton, StyledInput}