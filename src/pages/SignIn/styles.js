import styled from 'styled-components';

export const Container = styled.div`

   > main {
      margin: 10.0rem auto;

      width: 50%;
      height: 70vh;

      background-color: #1ab394;

      > div {
          padding-top: 8.0rem;
          padding-left: 9.0rem;
          padding-right: 7.0rem;

         > div {
            display: flex;
            flex-direction: column;
            gap: 1.0rem;
            padding-left: 8.0rem;
   
            > label {
               color: white;
               font-size: 2.0rem;
               font-weight: 400;
               padding-top: 1.5rem;
            }
   
            > input {
               width: 70%;
               height: 3.5rem;
               outline: none;
               border: none;
            }
         }
      }

      > button {
         background-color: white;
         color: #1ab394;

         border: none;
         border-radius: 1.0rem;

         padding: 2.0rem;

         font-size: 1.5rem;

         width: 15.0rem;

         margin-top: 5.0rem;
         margin-left: 22.0rem;

         cursor: pointer;

         &:hover {
            background-color: #dddddd;
         }
      }

   }

`;
