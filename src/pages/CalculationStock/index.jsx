import axios from 'axios';
import { useEffect, useState } from 'react';

//Styles
import { Container } from './styles';

//Icons
import { TbElevator } from 'react-icons/tb';

//Components
import { Header } from '../../components/Header/index';
import { FormModal } from '../../components/FormModal/index';
import { Pagination } from '../../components/Pagination';

export function CalculationStock(){
  const [open, setOpen] = useState(false);
  const [stocks, setStocks] = useState([]);

  const getStocks = async ()=>{
    const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getAll");

    const data = response.data;

    setStocks(data);
  }

  //Pagination Variables
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = stocks.slice(pagesVisited, pagesVisited + itemsPerPage);
  const pageCount = Math.ceil(stocks.length / itemsPerPage);
  const changePage = ({selected})=>{
     setPageNumber(selected);
  }

  useEffect(()=>{
    getStocks()
 }, []);

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
                    {
                      displayItems.map((stock)=>(
                        <tr key={stock.id}>
                          <td>{stock.due_date}</td>
                          <td onClick={()=>setOpen(!open)} className='link'>{stock.number}</td>
                          <td>{stock.type}</td>
                          <td>{stock.service.name}</td>
                          <td>{stock.peaple.name}</td>
                          <td>{stock.complain}</td>
                          <td>{stock.claimed}</td>
                          <td>{stock.status}</td>
                        </tr>
                      )) 
                    }
                    </tbody>
                </table>

               <Pagination pageCount={pageCount} changePage={changePage}/>
            </section>

            <FormModal 
            isOpen={open} 
            setOpen={setOpen}
            />
        </Container>
    );
}