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
        border: 1px solid #cbd0d0;
        border-radius: 0.5rem;
        display: flex;
        gap: 5.0rem;
        align-items: center;

        padding: 1.0rem 2.0rem;
        width: 23.0rem;

        > svg {
            color: #326ac4;

            height: 5.5rem;
            width: 5.5rem;
        }

        > span {
            color: #326ac4;

            font-size: 1.8rem;
            font-weight: 600;
        }

        > a {
          text-decoration: none;
          display: flex;
          gap: 4.0rem;

          > svg {
            color: #326ac4;

            height: 6.5rem;
            width: 6.5rem;
          }

        > span {
            color: #326ac4;

            padding-top: 0.5rem;
            font-size: 1.8rem;
            font-weight: 600;
        }
        }
    }
  }

  .links {
    grid-column: 2/4;

    display: flex;
    gap: 1.5rem;

    .stock {
        border-radius: 0.5rem;
        background-color: #1ab394;
        color: white;
        padding: 2.0rem;

        width: 20.0rem;

        > a {
          text-decoration: none;
          
            > span {
              font-size: 2.0rem;
              color: white;
            }

            > h3, p {
              font-size: 1.5rem;
              color: white;
            }

        }

      }

    .calculations {
        display: grid;
        grid-template-columns: repeat(2, 21.0rem);
        grid-template-rows: repeat(2, auto);
        row-gap: 1.5rem;

        > div {
          border: 1px solid #cbd0d0;
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

             > a {
              text-decoration: none;
              > p {
                color: white;
                text-align: left;
                font-size: 1.5rem;
              }
              > h3 {
                color: white;
              }
             }

             > p {
              color: white;
              text-align: left;
              font-size: 1.5rem;
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

  .news {
    grid-column: 1/2;

    > h3 {
      color: #60604a;
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    > ul {
      
      list-style: none;
      
      > li {
        color: #80806c;
        font-size: 1.5rem;
        border-top: 1px solid #cbd0d0;
        border-bottom: 1px solid #cbd0d0;
        padding-bottom: 1.0rem;

        &::before{
          content:'\\2022 ';
          color: #1ab394;
          font-weight: bold;
          font-size: 3.0rem;
          padding-right: 4.0rem;
        }
      }
    }


  }

  .agenda {
    grid-column: 3/4;

    display: grid;
    grid-template-columns: repeat(2, 24.0rem);
    grid-template-rows: repeat(2, 11.0rem);

    > div {
        border: 1px solid #cbd0d0;
        border-radius: 0.5rem;
        display: flex;
        gap: 5.0rem;
        align-items: center;

        padding: 1.0rem 2.0rem;
        width: 23.0rem;
        height: 10.0rem;

        > svg {
            color: #326ac4;

            height: 5.5rem;
            width: 5.5rem;
          }

        > div {
          color: #326ac4;

          > h3 {
            text-align: right;
          }

          > p {
            font-size: 2.5rem;
            text-align:right;
          }
        }
      }  
  }

  .graphs {
    grid-column: 1/4;

    display: flex;
    justify-content: space-between;

    > div {
      background-color: white;
      padding: 1.5rem;

      height: 12.0rem;
      width: 23.0rem;

      > h4 {
        color: #60604a;
        font-size: 1.2rem;
      }

      > h5 {
        color: #80806c;
        font-size: 2.2rem;
        font-weight: 300;
      }

      > p {
        color: #80806c;
        font-size: 1.2rem;
      }
    }
  }
`