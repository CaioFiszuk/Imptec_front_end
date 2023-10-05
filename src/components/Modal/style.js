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
    padding-left: 4.0rem;
    padding-right: 4.0rem;
    padding-bottom: 4.5rem;
  }

  .info{
    display: flex;
    border-top: 1px solid #cbd0d0;
    gap: 10.0rem;
    justify-content: space-between;

    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    > div {
        display: flex;
        flex-direction: column;

        > span {
            font-size: 1.5rem;
            color: #80806c;

            padding-bottom: 2.0rem;

            display: flex;
            gap: 8.0rem;

            > p {
               color: red;
               border: 1px solid red;
               border-radius: 5px;
               padding: 4px;
            }
        }
    }
  }

  .modalTable{
    > table {
      padding-left: 2.0rem;
      padding-right: 2.0rem;
      padding-top: 1.0rem;
      border-spacing: 0;
  
      width: 100%;
      table-layout: auto;
  
      > thead {
          color: #60604a;
          font-size: 2.0rem; 
  
          > tr {
              > th {          
                  border-bottom: 2px solid #cbd0d0;
                  padding-bottom: 1.0rem;
  
                  text-align: left;
                 
                  > svg {
                      width: 2.0rem;
                      height: 2.0rem;
                  }
              } 
          }
      }
  
      > tbody{
          color: #80806c;
          font-size: 1.5rem;
  
          > tr{
              > td{ 
                  border-bottom: 2px solid #cbd0d0;
                  padding-top: 1.0rem;
                  padding-bottom: 1.0rem;
  
              } 
          }
      }
    }
  }

`;