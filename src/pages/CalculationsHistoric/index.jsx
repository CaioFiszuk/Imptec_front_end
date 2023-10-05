import { Container } from './styles';
import ReactPaginate from 'react-paginate';

import { Header } from '../../components/Header/index';

import { TbElevator } from 'react-icons/tb';
import { FaEye } from 'react-icons/fa';
import { ImFileExcel, ImFilePdf } from 'react-icons/im';

export function CalculationsHistoric(){
    return(
        <Container>
          <Header />
          
          <section>
              <div className='title'>
                  <h2>Histórico de Cálculos</h2>
              </div>

              <div className='searchField'>
                  <input type="search" placeholder='Pesquisar' />
              </div>

              <table className='historicTable'>
                  <thead>
                      <tr>
                      <th>Prazo <TbElevator /></th>
                      <th>Nº Processo <TbElevator /></th>
                      <th>Reclamante <TbElevator /></th>
                      <th>Reclamada <TbElevator /></th>
                      <th>Solicitante <TbElevator /></th>
                      <th>Dados <TbElevator /></th>
                      <th>Excel <TbElevator /></th>
                      <th>PDF <TbElevator /></th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20/09/2023</td>
                      <td>123456-78.9012.3.45.6790</td>
                      <td>Nome A</td>
                      <td>Nome B</td>
                      <td>Nome C</td>
                      <td><FaEye /></td>
                      <td><ImFileExcel /></td>
                      <td><ImFilePdf /></td>
                    </tr>
                  </tbody>
              </table>

              <div className='paginationBox'>
                  <ReactPaginate
                      breakLabel="..."
                      nextLabel=">>"
                      pageCount={2}
                      previousLabel="<<"
                      containerClassName='paginator'
                      pageClassName='pageNumber'
                      previousClassName='previousPage'
                      nextClassName='nextPage'
                  />
              </div>
          </section>
        </Container>
    );
}