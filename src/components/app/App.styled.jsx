import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    

`

const StyledH1 = styled.h1`
    margin-bottom: ${p => p.theme.space[4]}px;
`

const StyledH2 = styled.h2`
    margin-bottom: ${p => p.theme.space[4]}px;
`
export { StyledDiv, StyledH1, StyledH2}


