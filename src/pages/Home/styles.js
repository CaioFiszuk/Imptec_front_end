import styled from 'styled-components';

export const Container = styled.div`
  > main {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(3, auto);
      row-gap: 2.0rem;

      padding: 4.5rem;

  }

  .actions {
    display: grid;
    grid-template-columns: repeat(2, 25.0rem);
    grid-template-rows: repeat(2, auto);
    row-gap: 1.5rem;

    > div{
        border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
        border-radius: 0.5rem;
        display: flex;
        gap: 5.0rem;
        align-items: center;

        padding: 1.0rem 2.0rem;
        width: 23.0rem;

        > a {
          text-decoration: none;
          display: flex;
          gap: 4.0rem;

          > svg {
            color: #326ac4;

            height: 5.0rem;
            width: 5.0rem;
          }

          > span {
            color: #326ac4;

            font-size: 2.0rem;
            font-weight: 600;
          }
        }
    }
  }

  .screens {
    grid-column: 2/4;

    display: flex;
    gap: 1.5rem;

    .stock {
        border-radius: 0.5rem;
        background-color: ${({theme})=>theme.COLORS.APP_THEME};
        color: white;
        padding: 2.0rem;
        width: 20.0rem;
          
          > span {
            font-size: 2.0rem;
            color: white;
          }

          > h3, p {
            font-size: 1.5rem;
            color: white;
          }
      }

    .calculations {
        display: grid;
        grid-template-columns: repeat(2, 21.0rem);
        grid-template-rows: repeat(2, auto);
        row-gap: 1.5rem;

        > div {
          border: 1px solid ${({theme})=>theme.COLORS.BORDERS};
          border-radius: 0.5rem;
          display: flex;
          gap: 5.0rem;
          align-items: center;
  
          padding: 1.0rem 2.0rem;
          width: 20.0rem;

          > svg {
            height: 5.5rem;
            width: 5.5rem;
            color: white;
          }

          > span {
            font-family: serif;
            font-size: 5.0rem;
            font-weight: bold;
            color: white;
          }

          > div {
            color: white;

              > p {
                color: white;
                text-align: left;
                font-size: 1.5rem;
              }
              > h3 {
                color: white;
              }
          }
        }

        .first{
            background-color: #00cccb;
        }
          
        .second{
            background-color: #ffb14d;
        }
        
        .third{
            background-color: #326ac4;
        }
        
        .fourty{
            background-color: #fc235a;
        }
    }
  }

  .mostRecent {
    grid-column: 1/2;

    > h3 {
      color: ${({theme})=>theme.COLORS.TABLE_TITLES};
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    > ul {
      
      list-style: none;
      
      > li {
        font-size: 1.5rem;
        border-top: 1px solid ${({theme})=>theme.COLORS.BORDERS};
        border-bottom: 1px solid ${({theme})=>theme.COLORS.BORDERS};
        padding-bottom: 1.0rem;

        &::before {
          content:'\\2022 ';
          color: ${({theme})=>theme.COLORS.APP_THEME};
          font-weight: bold;
          font-size: 3.0rem;
          padding-right: 3.0rem;
        }

        > a {
          text-decoration: none;
          color: ${({theme})=>theme.COLORS.CONTENT};
        }
      }
    }


  }

  .todolist {
    grid-column: 3/4;
  
  }

  
`