import styled from 'styled-components';

export const Container = styled.div`

`;

export const Form = styled.form`
  width: 90%;
  height: 43.0rem;
  background-color: #ffffff; 

  margin: 5.0rem auto;

  border: 1px solid #cbd0d0;

  position: relative;

  .formTitle{
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;

    border-bottom: 1px solid #cbd0d0;

    > h2{
      color: #a0a09e;
      font-size: 2.0rem;
    }

    > svg{
      color: #a0a09e;
      width: 2.0rem
      height: 2.0rem;
      margin-top: 0.8rem;
    }
  }


  > fieldset{
    display: grid;
    grid-template-rows: repeat(3, auto);
    gap: 1.5rem;

    border: none;   
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-top: 1.5rem;
  }

  .row{
    display: flex;
    gap: 1.5rem;
  }

  .field{
    display: flex;
    flex-direction: column;

    > label{
      color: #3e7ebc;
      font-size: 1.4rem;
      font-weight: 700;
    }

    > input, select{
      border: 1px solid #cbd0d0;
      outline: none;
      height: 3.5rem;

      font-size: 2.0rem;

      padding-left: 1.0rem;
    }

  }

  .sizeOne{
    width: 15.0rem;
  }
  .sizeTwo{
    width: 35.8rem;
  }
  .sizeThree{
    width: 40.0rem;
  }
  .sizeFour{
    width: 50.0rem;
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