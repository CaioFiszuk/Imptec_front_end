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

          color: ${({theme})=>theme.COLORS.TITLES};

          font-size: 1.5rem;
        }

        .firstLink{
          color: ${({theme})=>theme.COLORS.APP_THEME};
         }
      }

      .dropdown {
        position: relative;
      }
    
    .dropdown-menu {
        display: none;
        position: absolute;
        background-color: #ffffff;
        list-style: none;
        padding: 0;
    }
    
    .dropdown-menu li {
        margin: 0;
    }
    
    .dropdown-menu li a {
        display: block;
        padding: 10px 20px;
        color: ${({theme})=>theme.COLORS.TITLES};
        font-size: 1.5rem;
        text-decoration: none;
    }
    
    .dropdown-menu li a:hover {
        background-color: ${({theme})=>theme.COLORS.TITLES};
        color: #ffffff;
    }
    
    .dropdown:hover .dropdown-menu {
        display: block;
    }
    }
   }

   .logo{
    background-color: ${({theme})=>theme.COLORS.APP_THEME};
    color: #ffffff;
    border: none;
    
    width: 12.0rem;

    font-size: 1.5rem;

    display: grid;
    place-content: center;

    cursor: pointer;
   }

   > a {
    > svg{
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 2.0rem;
      cursor: pointer;
   }

  }

`;
