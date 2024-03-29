import styled from 'styled-components';

export const Container = styled.div`
  > section{
    width: 95%;
    height: 45.0rem;
    background-color: #ffffff; 
 
    margin: 5.0rem auto;
 
    border: 1px solid ${({theme})=>theme.COLORS.BORDERS};



    display: flex;
    flex-direction: column;
  }

  .title{
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;

    border-bottom: 1px solid ${({theme})=>theme.COLORS.BORDERS};

    margin-bottom: 2.0rem;

    > h2{
      color: ${({theme})=>theme.COLORS.TITLES};
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
        border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
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
        color: ${({theme})=>theme.COLORS.TABLE_TITLES};
        font-size: 2.0rem; 

        > tr {
            > th {          
                border-bottom: 2px solid ${({theme})=>theme.COLORS.BORDERS};
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
        color: ${({theme})=>theme.COLORS.CONTENT};
        font-size: 1.5rem;

        > tr{
            > td{ 
                border-bottom: 2px solid ${({theme})=>theme.COLORS.BORDERS};
                padding-top: 1.0rem;
                padding-bottom: 1.0rem;
            } 

            .link{
              > a{
                cursor: pointer;
                color: darkcyan;
                text-decoration: none;
              }
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
            border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
            color: ${({theme})=>theme.COLORS.CONTENT};
        }
    
        .previousPage{
            padding: 1.0rem;
            cursor: pointer;
            border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
            color: ${({theme})=>theme.COLORS.CONTENT};
        }
    
        .nextPage{
            padding: 1.0rem;
            cursor: pointer;
            border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
            color: ${({theme})=>theme.COLORS.CONTENT};
        }
      }
  }
`;