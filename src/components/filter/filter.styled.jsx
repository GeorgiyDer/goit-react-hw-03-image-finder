import styled from 'styled-components';

const StyledLable = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
`
const StyledInput = styled.input`
    width: 200px;
`
export { StyledLable, StyledInput}