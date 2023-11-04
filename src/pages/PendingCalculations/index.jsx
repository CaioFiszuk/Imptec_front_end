import axios from 'axios';
import { useEffect, useState } from 'react';

//Styles
import { Container } from './styles';

//Components
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination/index';

//Icons
import { TbElevator } from 'react-icons/tb';

//Router
import { Link } from "react-router-dom";

export function PendingCalculations(){
    const [pendings, setPendings] = useState([]);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("ASC");

    const getPendings = async ()=>{
        const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getByStatus/Novo");

        const data = response.data;

        setPendings(data);
    }

    //Pagination variables
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 5;
    const pagesVisited = pageNumber * itemsPerPage;
    const displayItems = pendings.slice(pagesVisited, pagesVisited + itemsPerPage);
    const pageCount = Math.ceil(pendings.length / itemsPerPage);
    const changePage = ({selected})=>{
       setPageNumber(selected);
    }

    //Sorting function
    function toSort(col){
        if(sort === 'ASC'){
         const sorted = [...pendings].sort((a,b)=>
             a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
         );
         setPendings(sorted);
         setSort("DSC");
        }
        if(sort === 'DSC'){
         const sorted = [...pendings].sort((a,b)=>
             a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
         );
         setPendings(sorted);
         setSort("ASC");
        }
     }

    useEffect(()=>{
       getPendings()
    }, []);

    return(
        <Container>
            <Header />

            <section>
                <div className='title'>
                    <h2>Cálculos Pendentes</h2>
                </div>

                <div className='searchField'>
                    <input 
                    type="search"
                    placeholder='Pesquisar no bolsão'
                    onChange={e=>setQuery(e.target.value)} 
                    />
                </div>

                <table className='invoiceTable'>
                    <thead>
                       <tr>
                        <th onClick={()=>toSort("requesting")}>Nº <TbElevator /></th>
                        <th>Faturamento <TbElevator /></th>
                        <th>Sacado <TbElevator /></th>
                        <th onClick={()=>toSort("price")}>Valor R$ <TbElevator /></th>
                        <th onClick={()=>toSort("due_date")}>Vencimento <TbElevator /></th>
                        <th onClick={()=>toSort("status")}>Status <TbElevator /></th>
                        <th>Período <TbElevator /></th>
                        <th>Ação <TbElevator /></th>
                       </tr>
                    </thead>
                    <tbody>
                      {
                        displayItems.filter(
                            pending=>pending.peaple.name.toLowerCase().includes(query)||
                            pending.due_date.toLowerCase().includes(query)||
                            pending.price.toLowerCase().includes(query)
                            ).map((pending, index)=>(
                            <tr key={index}>
                               <td className='link'><Link to={`/processo/${pending.number}`}>{pending.requesting}</Link></td>
                               <td>10/09/2023</td>
                               <td>{pending.peaple.name}</td>
                               <td>{pending.price}</td>
                               <td>{pending.due_date.split("-").reverse().join("/")}</td>
                               <td>{pending.status}</td>
                               <td>10/09/2023</td>
                               <td>Baixar</td>
                            </tr>
                        ))
                      }
                    </tbody>
                </table>

                <Pagination pageCount={pageCount} changePage={changePage}/>

            </section>

        </Container>
    );
}