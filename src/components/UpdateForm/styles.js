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
    background-color: ${({theme})=>theme.COLORS.APP_THEME};
    color: white;
    padding-top: 2.0rem;
    padding-left: 1.5rem;
    padding-bottom: 2.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        font-weight: 400;
        font-size: 1.8rem;
    }

    > span {
      > strong{
        font-weight: 400;
        font-size: 1.8rem;
        color: black;
        margin-right: 2.0rem;
        cursor: pointer;
      }
    }
  }

  .modalBody{
    padding-top: 2.0rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 4.5rem;

    > section{

      display: flex;
      flex-direction: column;

      > fieldset{
         border: none;
         display: flex;
         gap: 1.5rem;

         padding-bottom: 4.0rem;

         .field{
          display: flex;
          flex-direction: column;

          > label {
            color: ${({theme})=>theme.COLORS.LABELS};
            font-size: 1.4rem;
            font-weight: 700;
          }

          > select, input{
            border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
            outline: none;
            height: 3.5rem;
            min-width: 24.0rem;
      
            font-size: 2.0rem;
      
            padding-left: 1.0rem;
          }

          .file {
            border: none;
          }
         }

         > table {
           margin-right: 1.5rem;
            > thead {
              color: gray;
              > tr{
                background-color: #f9f9f9;
                font-size: 1.6rem;
                > th {
                  text-align: left;
                  padding: 1.0rem;
                  border-bottom: 1px solid ${({theme})=>theme.COLORS.BORDERS};
                }
              }
            }
            > tbody {
               color: #3e7ebc;
               > tr {
                font-size: 1.6rem;
                 > td {
                  padding: 1.0rem;
                  border-bottom: 1px solid ${({theme})=>theme.COLORS.BORDERS};
                 }
               }
            }
         }
      }
    }
  }
`;

export const Button = styled.button`
background-color: ${({theme})=>theme.COLORS.APP_THEME};
color: white;
border: none;
border-radius: 0.5rem;
padding: 1.0rem;

font-size: 1.6rem;

align-self: self-end;

cursor: pointer;

&:hover{
  background-color: #089172;
}
`;