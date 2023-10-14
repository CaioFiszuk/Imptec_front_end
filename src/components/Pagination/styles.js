import styled from "styled-components";

export const Container = styled.div`
    padding-right: 2.5rem;

    align-self: flex-end;
    margin-top: 2.0rem;

    display: flex;
    justify-content: end;

    .paginator{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    
        .pageNumber, .previousPage, .nextPage{
            padding: 1.0rem;
            cursor: pointer;
            border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
            color: ${({theme})=>theme.COLORS.CONTENT};
        }

        .activePage{
          background-color: ${({theme})=>theme.COLORS.APP_THEME};
          color: #ffffff;
        }
      }
`;