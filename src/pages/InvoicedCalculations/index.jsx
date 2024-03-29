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

export function InvoicedCalculations(){
    const [invoices, setInvoices] = useState([]);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("ASC");

    const getInvoices = async ()=>{
        const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getByStatus/Faturado");

        const data = response.data;

        setInvoices(data);
    }

    //Pagination variables
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 5;
    const pagesVisited = pageNumber * itemsPerPage;
    const displayItems = invoices.slice(pagesVisited, pagesVisited + itemsPerPage);
    const pageCount = Math.ceil(invoices.length / itemsPerPage);
    const changePage = ({selected})=>{
       setPageNumber(selected);
    }

    //Sorting function
    function toSort(col){
        if(sort === 'ASC'){
         const sorted = [...invoices].sort((a,b)=>
             a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
         );
         setInvoices(sorted);
         setSort("DSC");
        }
        if(sort === 'DSC'){
         const sorted = [...invoices].sort((a,b)=>
             a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
         );
         setInvoices(sorted);
         setSort("ASC");
        }
     }

    useEffect(()=>{
       getInvoices()
    }, []);

    return(
        <Container>
            <Header />

            <section>
                <div className='title'>
                    <h2>Cálculos Fatutados</h2>
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
                            invoice=>invoice.peaple.name.toLowerCase().includes(query)||
                            invoice.due_date.toLowerCase().includes(query)||
                            invoice.price.toLowerCase().includes(query)
                            ).map((invoice, index)=>(
                            <tr key={index}>
                               <td className='link'><Link to={`/processo/${invoice.number}`}>{invoice.requesting}</Link></td>
                               <td>10/09/2023</td>
                               <td>{invoice.peaple.name}</td>
                               <td>{invoice.price}</td>
                               <td>{invoice.due_date.split("-").reverse().join("/")}</td>
                               <td>{invoice.status}</td>
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