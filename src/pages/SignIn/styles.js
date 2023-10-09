import styled from 'styled-components';

export const Container = styled.div`

   > main {
      margin: 10.0rem auto;

      width: 50%;
      height: 70vh;

      background-color: ${({theme})=>theme.COLORS.APP_THEME};

      display: grid;
      grid-template-colums: repeat(1, auto);

      .title{
         display: flex;
         flex-direction: column;
         padding-top: 5.0rem;

         > h1 {
            color: white;
            text-align: center;
         }
      }

      .field{
         display: flex;
         flex-direction: column;
         padding-left: 13.0rem;

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

      .button{
         display: grid;
         place-content: center;

         > button {
            background-color: white;
            color: ${({theme})=>theme.COLORS.APP_THEME};
   
            border: none;
            border-radius: 1.0rem;
   
            padding: 1.5rem;
   
            font-size: 1.5rem;
            width: 35.0rem;
   
            cursor: pointer;
   
            &:hover {
               background-color: #dddddd;
            }
         }
      }

   }

`;
