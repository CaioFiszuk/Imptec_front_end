import axios from 'axios';
import { useEffect, useState } from 'react';

//Styles
import { Container } from './styles';

//Icons
import { TbElevator } from 'react-icons/tb';

//Router
import { Link } from 'react-router-dom';

//Components
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination';

export function CalculationStock(){
  const [stocks, setStocks] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("ASC");

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

  //Sorting Funcion
  function toSort(col){
    if(sort === 'ASC'){
     const sorted = [...stocks].sort((a,b)=>
         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
     );
     setStocks(sorted);
     setSort("DSC");
    }
    if(sort === 'DSC'){
     const sorted = [...stocks].sort((a,b)=>
         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
     );
     setStocks(sorted);
     setSort("ASC");
    }
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
                    <input type="search" 
                    placeholder='Pesquisar no bolsão' 
                    onChange={e=>setQuery(e.target.value)}
                    />
                </div>

                <table className='invoiceTable'>
                    <thead>
                       <tr>
                        <th>Prazo <TbElevator /></th>
                        <th onClick={()=>toSort("number")}>Nº Processo <TbElevator /></th>
                        <th onClick={()=>toSort("type")}>Solicitação <TbElevator /></th>
                        <th>Trabalho <TbElevator /></th>
                        <th>Solicitante <TbElevator /></th>
                        <th>Reclamante <TbElevator /></th>
                        <th>Reclamado <TbElevator /></th>
                        <th onClick={()=>toSort("status")}>Status <TbElevator /></th>
                       </tr>
                    </thead>
                    <tbody>
                      {
                        displayItems.filter(
                          stock=>stock.number.toLowerCase().includes(query)||stock.type.toLowerCase().includes(query)||
                          stock.status.toLowerCase().includes(query)
                          ).map((stock)=>(
                          <tr key={stock.id}>
                            <td>{stock.due_date.split("-").reverse().join("/")}</td>
                            <td className='link'><Link to={`/atualizar-processo/${stock.number}`}>{stock.number}</Link></td>
                            <td>{stock.type}</td>
                            <td>{stock.service.name}</td>
                            <td>{stock.peaple.name}</td>
                            <td>{stock.complain}</td>
                            <td>{stock.claimed}</td>
                            <td>{stock.status}</td>
                          </tr>
                        )  
                      )
                      }
                    </tbody>
                </table>

               <Pagination pageCount={pageCount} changePage={changePage}/>
            </section>

        </Container>
    );
}