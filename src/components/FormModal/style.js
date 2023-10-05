import styled from "styled-components";

export const Container = styled.div`
  .background{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #454545;
  }

  .modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    
    width: 90%;

  }

  .modalHeader{
    background-color: #1ab394;
    color: white;
    padding-top: 2.0rem;
    padding-left: 1.5rem;
    padding-bottom: 2.5rem;

    > h2 {
        font-weight: 400;
        font-size: 1.8rem;
    }
  }

  .modalBody{
    padding-top: 2.0rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 4.5rem;

    > form{
      border: 1px solid black;

      > fieldset{
         display: flex;
         gap: 1.5rem;

         padding-bottom: 4.0rem;

         .field{
          display: flex;
          flex-direction: column;

          > label {
            color: #3e7ebc;
            font-size: 1.4rem;
            font-weight: 700;
          }

          > select, input{
            border: 1px solid #cbd0d0;
            outline: none;
            height: 3.5rem;
            min-width: 24.0rem;
      
            font-size: 2.0rem;
      
            padding-left: 1.0rem;
          }
         }
      }
    }
  }
`;

export const Button = styled.button`
background-color: #1ab394;
color: white;
border: none;
border-radius: 0.5rem;
padding: 1.0rem;

font-size: 1.6rem;

position: absolute;
top: 365px;
left: 970px;

cursor: pointer;

&:hover{
  background-color: #089172;
}
`;