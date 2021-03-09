import styled from 'styled-components'


export default styled.button`
      border-radius: 100px;
      color: white;
      cursor: pointer;
      background-color:rgb(52, 55, 128);
      border: none;
      padding: 0.5rem 2rem;
        border: none;
        margin-top: 3vh;
    outline:none;
    
   
      &:hover{
            background-color: #1e204a;
            box-shadow: none;
            box-shadow: 0 10px 40px 0 rgba(0,0,0,0.2);
            -webkit-box-shadow: 0 10px 40px 0 rgba(0,0,0,0.2);
      }
       &:after{ 
          border-radius: 100px;
          cursor: pointer;
          background-color:rgb(52, 55, 128);
          padding: 1rem 3rem;
          border: none;
          outline:none;
      }
       &:not(:disabled):not(.disabled):active{
          border-radius: 100px;
      cursor: pointer;
      background-color:rgb(52, 55, 128);

      }
      &:focus{
      outline:0;
      }

      
 
`;



