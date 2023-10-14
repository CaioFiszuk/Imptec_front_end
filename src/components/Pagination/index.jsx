import ReactPaginate from "react-paginate";
import { Container } from './styles';

export function Pagination({pageCount, changePage}){
    return(
        <Container>
        <ReactPaginate
           nextLabel=">>"
           pageCount={pageCount}
           previousLabel="<<"
           containerClassName='paginator'
           pageClassName='pageNumber'
           previousClassName='previousPage'
           nextClassName='nextPage'
           activeClassName='activePage'
           onPageChange={changePage}
        />
       </Container>
    );
}