import axios from 'axios';
import { useEffect, useState } from 'react';

//Styles
import { Container } from './styles';

//Components
import { Modal } from '../../components/Modal/index';
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination/index';

//Icons
import { TbElevator } from 'react-icons/tb';

export function InvoicedCalculations(){
    const [open, setOpen] = useState(false);
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
                    <h2>Processos Fatutados</h2>
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
                            ).map((invoice)=>(
                            <tr key={invoice.id}>
                               <td onClick={()=>setOpen(!open)} className='link'>{invoice.requesting}</td>
                               <td>10/09/2023</td>
                               <td>{invoice.peaple.name}</td>
                               <td>{invoice.price}</td>
                               <td>{invoice.due_date.split("-").reverse().join("/")}</td>
                               <td>{invoice.status}</td>
                               <td>10/09/2023</td>
                               <td>Baixar</td>
                               <Modal 
                                 isOpen={open} 
                                 setOpen={setOpen}
                                 dataNumber={invoice.number}
                                 dataComplain={invoice.complain}
                                 dataClaimed={invoice.claimed}
                                 dataType={invoice.type}
                                 dataServiceName={invoice.service.name}
                                 dataPrice={invoice.price}
                                 dataDueDate={invoice.due_date.split("-").reverse().join("/")}
                                 dataPersonName={invoice.peaple.name}
                                 dataStatus={invoice.status}
                                />
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