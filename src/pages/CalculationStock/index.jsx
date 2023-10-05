import { Container } from './styles';
import ReactPaginate from 'react-paginate';

import { TbElevator } from 'react-icons/tb';

import { Header } from '../../components/Header/index';
import { FormModal } from '../../components/FormModal/index';
import { useState } from 'react';

export function CalculationStock(){
  const [open, setOpen] = useState(false);
    return(
        <Container>
            <Header />

            <section>
                <div className='title'>
                    <h2>Bolsão de solicitações</h2>
                </div>

                <div className='searchField'>
                    <input type="search" placeholder='Pesquisar no bolsão' />
                </div>

                <table className='invoiceTable'>
                    <thead>
                       <tr>
                        <th>Prazo <TbElevator /></th>
                        <th>Nº Processo <TbElevator /></th>
                        <th>Solicitação <TbElevator /></th>
                        <th>Trabalho <TbElevator /></th>
                        <th>Solicitante <TbElevator /></th>
                        <th>Reclamante <TbElevator /></th>
                        <th>Reclamado <TbElevator /></th>
                        <th>Status <TbElevator /></th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>20/09/2023</td>
                        <td onClick={()=>setOpen(!open)} className='link'>123456-78.9012.3.45.6790</td>
                        <td>Contestação</td>
                        <td>Inicial</td>
                        <td>Advogado 2</td>
                        <td>Reclamante 1</td>
                        <td>Reclamado 1</td>
                        <td>Novo</td>
                      </tr>
                      <tr>
                        <td>20/09/2023</td>
                        <td onClick={()=>setOpen(!open)} className='link'>123456-78.9012.3.45.6790</td>
                        <td>Liquidação</td>
                        <td>Inicial</td>
                        <td>Advogado 5</td>
                        <td>Reclamante 2</td>
                        <td>Reclamado 2</td>
                        <td>Calculado</td>
                      </tr>
                      <tr>
                        <td>20/09/2023</td>
                        <td onClick={()=>setOpen(!open)} className='link'>123456-78.9012.3.45.6790</td>
                        <td>Liquidação</td>
                        <td>Inicial</td>
                        <td>Advogado 6</td>
                        <td>Reclamante 3</td>
                        <td>Reclamado 3</td>
                        <td>Faturado</td>
                      </tr>
                      <tr>
                        <td>20/09/2023</td>
                        <td onClick={()=>setOpen(!open)} className='link'>123456-78.9012.3.45.6790</td>
                        <td>Liquidação</td>
                        <td>Inicial</td>
                        <td>Advogado 3</td>
                        <td>Reclamante 4</td>
                        <td>Reclamado 4</td>
                        <td>Enviado</td>
                      </tr>
                      <tr>
                        <td>20/09/2023</td>
                        <td onClick={()=>setOpen(!open)} className='link'>123456-78.9012.3.45.6790</td>
                        <td>Liquidação</td>
                        <td>Inicial</td>
                        <td>Advogado 1</td>
                        <td>Reclamante 5</td>
                        <td>Reclamado 5</td>
                        <td>Calculando</td>
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

            <FormModal 
            isOpen={open} 
            setOpen={setOpen}
            />
        </Container>
    );
}