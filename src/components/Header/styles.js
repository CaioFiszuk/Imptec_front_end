import styled from 'styled-components';

export const Container = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;

   background-color: #ffffff;

   width: 100%;
   height: 5.5rem;

   .menu{
    display: flex;

    > ul {
      list-style: none;
      padding: 0;

      > li {
        display: inline-block;
        margin-right: 2.0rem;
        height: 5.5rem;

        > a{
          text-decoration: none;
          padding: 1.5rem 2.0rem;
          display: block;

          color: #a0a09e;

          font-size: 15px;
        }

        .firstLink{
          color: #1ab394;
         }
      }
    }
   }

   .logo{
    background-color: #1ab394;
    color: #ffffff;
    border: none;
    
    width: 12.0rem;

    font-size: 1.5rem;

    display: grid;
    place-content: center;

    cursor: pointer;
   }

   > svg{
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2.0rem;
    cursor: pointer;
  }

`;
