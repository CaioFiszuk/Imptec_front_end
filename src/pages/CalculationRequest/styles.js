import styled from 'styled-components';

export const Container = styled.div`

`;

export const Form = styled.form`
   width: 95%;
   height: 45.0rem;
   background-color: #ffffff; 

   margin: 5.0rem auto;

   border: 1px solid ${({theme})=>theme.COLORS.BORDERS};

   .formTitle{
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;

    border-bottom: 1px solid ${({theme})=>theme.COLORS.BORDERS};

    > h2{
      color: ${({theme})=>theme.COLORS.TITLES};
      font-size: 2.0rem;
    }

    > svg{
      color: ${({theme})=>theme.COLORS.TITLES};
      width: 2.0rem
      height: 2.0rem;
      margin-top: 0.8rem;
    }
   }

   > fieldset{
    border: none;   
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    display: grid;
    grid-template-columns: repeat(4, 24%);
    grid-template-rows: repeat(2, 1fr);

    gap: 1.5rem;
  }

  .field{
    display: flex;
    flex-direction: column;

    > label{
      color: ${({theme})=>theme.COLORS.LABELS};
      font-size: 1.4rem;
      font-weight: 700;
    }

    > input, select{
      border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
      outline: none;
      height: 3.3rem;

      font-size: 2.0rem;

      padding-left: 1.0rem;
    }
  }

  .textarea{
    display: flex;
    flex-direction: column;

    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.5rem;

    > label{
      color: ${({theme})=>theme.COLORS.LABELS};
      font-size: 1.4rem;
      font-weight: 700;
    }

    > textarea{
      border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
      outline: none;
      height: 8.3rem;

      font-size: 2.0rem;

      padding-left: 1.0rem;
    }
  }

  .file{
    display: flex;
    flex-direction: column;

    > label{
      color: ${({theme})=>theme.COLORS.LABELS};
      font-size: 1.4rem;
      font-weight: 700;

      margin-left: 2.8rem;
    }

    > input {
      margin-left: 1.0rem;
      color: gray;
      font-size: 1.5rem;
    }
  }
`;

export const Button = styled.button`
  background-color: ${({theme})=>theme.COLORS.APP_THEME};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 1.0rem;
  margin-top: 2.5rem;
  margin-left: 103.0rem;

  font-size: 1.6rem;

  cursor: pointer;

  &:hover{
    background-color: #089172;
  }
`;