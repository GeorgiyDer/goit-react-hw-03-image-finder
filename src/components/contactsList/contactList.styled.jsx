import styled from 'styled-components';

const StyledUl = styled.ul`
    width: 300px;

`


const StyledLi = styled.li`
    display: flex;
    margin: 10px;
    width: 400px;
    justify-content: space-between;
`

const StyledP = styled.p`
    margin-right: ${p => p.theme.space[4]}px;
`
const StyledButton = styled.button`
    width: 100px;
    cursor: pointer;
`
export { StyledUl, StyledLi, StyledP, StyledButton}