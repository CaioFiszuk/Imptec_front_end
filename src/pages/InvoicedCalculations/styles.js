import styled from 'styled-components';

export const Container = styled.div`
  > section{
    width: 95%;
    height: 45.0rem;
    background-color: #ffffff; 
 
    margin: 5.0rem auto;
 
    border: 1px solid #cbd0d0;



    display: flex;
    flex-direction: column;
  }

  .title{
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;

    border-bottom: 1px solid #cbd0d0;

    margin-bottom: 2.0rem;

    > h2{
      color: #a0a09e;
      font-size: 2.0rem;
    }
  }

  .searchField{
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-bottom: 1.0rem;

    display: grid;
    grid-template-columns: 1fr;

    > input {
        border: 1px solid #cbd0d0;
        outline: none;
        height: 3.3rem;
  
        font-size: 2.0rem;
  
        padding-left: 1.0rem;
    }
  }

  .invoiceTable{
    padding-left: 2.5rem;
    padding-right: 2.5rem;
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

            .link{
              cursor: pointer;
          }
        }
    }
}

  .paginationBox{
    padding-right: 2.5rem;

    align-self: flex-end;
    margin-top: 18.0rem;

    display: flex;
    justify-content: end;

    .paginator{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    
        .pageNumber{
            padding: 1.0rem;
            cursor: pointer;
            border: 1px solid #cbd0d0;
            color: #80806c;
        }
    
        .previousPage{
            padding: 1.0rem;
            cursor: pointer;
            border: 1px solid #cbd0d0;
            color: #80806c;
        }
    
        .nextPage{
            padding: 1.0rem;
            cursor: pointer;
            border: 1px solid #cbd0d0;
            color: #80806c;
        }
      }
  }
`;