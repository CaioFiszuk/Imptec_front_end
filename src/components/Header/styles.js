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

    .list {
      list-style: none;

      > li {
        display: inline-block;
        margin-right: 2.0rem;
        height: 5.5rem;

        .link {
          text-decoration: none;
          padding: 2.5rem 2.0rem;
          display: block;

          color: ${({theme})=>theme.COLORS.TITLES};

          font-size: 1.5rem;
        }

        .firstLink{
          text-decoration: none;
          color: ${({theme})=>theme.COLORS.APP_THEME};
          font-size: 1.5rem;
          padding: 2.5rem 2.0rem;
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
    height: 6.9rem;
    padding-top: 1.0rem;

    font-size: 1.5rem;

    display: grid;
    place-content: center;

    cursor: pointer;
   }

  .logout {
    > svg{
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 2.0rem;
      cursor: pointer;
    }
  }

 

  

}
`;
