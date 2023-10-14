import axios from 'axios';
import { useEffect, useState } from 'react';

//Styles
import { Container } from './styles';

//Paginator
import ReactPaginate from 'react-paginate';

//Components
import { Modal } from '../../components/Modal/index';
import { Header } from '../../components/Header/index';


//Icons
import { TbElevator } from 'react-icons/tb';

export function InvoicedCalculations(){
    const [open, setOpen] = useState(false);
    const [invoices, setInvoices] = useState([]);

    const getInvoices = async ()=>{
        const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getByStatus/Novo");

        const data = response.data;

        console.log(data);

        setInvoices(data);
    }

    useEffect(()=>{
       getInvoices()
    }, []);

    return(
        <Container>
            <Header />

            <section>
                <div className='title'>
                    <h2>Processos Fatutados</h2>
                </div>

                <div className='searchField'>
                    <input type="search" placeholder='Pesquisar no bolsão' />
                </div>

                <table className='invoiceTable'>
                    <thead>
                       <tr>
                        <th>Nº <TbElevator /></th>
                        <th>Faturamento <TbElevator /></th>
                        <th>Sacado <TbElevator /></th>
                        <th>Valor R$ <TbElevator /></th>
                        <th>Vencimento <TbElevator /></th>
                        <th>Status <TbElevator /></th>
                        <th>Período <TbElevator /></th>
                        <th>Ação <TbElevator /></th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td onClick={()=>setOpen(!open)} className='link'>8</td>
                        <td>20/09/2023</td>
                        <td>Advogado 2</td>
                        <td>60,00</td>
                        <td>10/09/2023</td>
                        <td>Vencido</td>
                        <td>01/08/2023 à 31/08/2023</td>
                        <td>Baixar</td>
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

            <Modal 
            isOpen={open} 
            setOpen={setOpen}
            />
        </Container>
    );
}