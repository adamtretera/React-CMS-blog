import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
  html {
    background: ${(props) => props.theme.colors.bcgError };
    background: ${(props) => props.theme.colors.bcg };
    height: 100%;
  
  }
  .dropdown-item.active, .dropdown-item:active{
  background-color: transparent;
  }
.ql-font-roboto {
     font-family: ${(props) => props.theme.fontFamily.mainFont };
     }
.modal-content{
border:none
}
  *{
    margin: 0;
    padding: 0;
    

    
   }
  .notifications{
  
     border-radius: 5px;
     color: white;
     padding: 4rem;
  }
   body{
     color:${(props) => props.theme.colors.mainColor };
     background: ${(props) => props.theme.colors.bcgError };
     background: ${(props) => props.theme.colors.bcg };
     font-family: ${(props) => props.theme.fontFamily.mainFont };
   }
   .dropdown-item{
   background: transparent;
   }
 


   `;

export default GlobalStyle;