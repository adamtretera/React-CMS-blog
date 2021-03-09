import styled from 'styled-components'
import React from "react";

const H2 = styled.h1`
 font-family:${(props) => props.theme.fontFamily.mainFont };
 color: ${(props) => props.theme.colors.mainColor };
 font-size: ${(props) => props.theme.fontSize.size4 };
 text-align: center;
 
 font-weight: bold;
 

 @media ${({theme}) => theme.mediaQueries.mobile}{
 font-size: ${(props) => props.theme.fontSize.size2A5 };
 
 }


`;
const H3 = styled.h3`
 color: ${(props) => props.theme.colors.mainColor };
 font-size: ${(props) => props.theme.fontSize.size1A3 };
 text-align: center;
 margin-bottom: ${(props) => props.theme.spacers.largeSpace };
 display: block;
 margin-left: 20%;
 max-width: 60%;

 
`;
function BigHeaderText(props) {
    return (
        <React.Fragment>
            <H2>{props.title}</H2>
            <H3>{props.subtitle}</H3>

        </React.Fragment>
    );
}

export default BigHeaderText;

