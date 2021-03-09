import styled, {css} from 'styled-components'

export default styled.div`
 ${(props) =>
       props.textAlign && css`
    text-align: ${(props) => props.theme.textAlign[props.textAlign]};

`};
      @media ${({theme}) => theme.mediaQueries.mobile}{
        text-align:${(props) => props.theme.textAlign.center };
        
 
 }
`;


