import axios from 'axios';
import { CSVLink } from 'react-csv';
import { useReactToPrint } from "react-to-print";
import { useState, useEffect, useRef } from 'react';

//Styles
import { Container } from './styles';

//Components
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination';

//Icons
import { TbElevator } from 'react-icons/tb';
import { FaEye } from 'react-icons/fa';
import { ImFileExcel, ImFilePdf } from 'react-icons/im';

//Router
import { Link } from 'react-router-dom';

export function CalculationsHistoric(){
    const [processes, setProcesses] = useState([]);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("ASC");

    const componentPdf = useRef();

    const generatePDF = useReactToPrint({
        content: ()=>componentPdf.current,
        documentTitle: "Historico de Calculos",
        onAfterPrint: ()=>alert("Os dados foram salvos em PDF")
    });

    const getProcesses = async()=>{
        const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getAll");

        const data = response.data;

        setProcesses(data);
    }

    //Pagination variables
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 5;
    const pagesVisited = pageNumber * itemsPerPage;
    const displayItems = processes.slice(pagesVisited, pagesVisited + itemsPerPage);
    const pageCount = Math.ceil(processes.length / itemsPerPage);
    const changePage = ({selected})=>{
        setPageNumber(selected);
    }

        //Sorting function
        function toSort(col){
            if(sort === 'ASC'){
             const sorted = [...processes].sort((a,b)=>
                 a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
             );
             setProcesses(sorted);
             setSort("DSC");
            }
            if(sort === 'DSC'){
             const sorted = [...processes].sort((a,b)=>
                 a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
             );
             setProcesses(sorted);
             setSort("ASC");
            }
         }

    useEffect(()=>{
        getProcesses()
     }, []);

    return(
        <Container>
          <Header />
          
          <section>
              <div className='title'>
                  <h2>Histórico de Cálculos</h2>
              </div>

              <div className='searchField'>
                  <input 
                   type="search"
                   placeholder='Pesquisar' 
                   onChange={e=>setQuery(e.target.value)} 
                  />
              </div>

              <div className='files'>
                  <CSVLink data={processes} className='excelLink'><ImFileExcel /></CSVLink>
                  <button onClick={generatePDF} className='pdfLink'><ImFilePdf /></button>
              </div>

              <div ref={componentPdf}>
                  <table className='historicTable'>
                      <thead>
                          <tr>
                          <th onClick={()=>toSort("due_date")}>Prazo <TbElevator /></th>
                          <th onClick={()=>toSort("number")}>Nº Processo <TbElevator /></th>
                          <th onClick={()=>toSort("complain")}>Reclamante <TbElevator /></th>
                          <th onClick={()=>toSort("claimed")}>Reclamada <TbElevator /></th>
                          <th>Solicitante <TbElevator /></th>
                          <th>Dados <TbElevator /></th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                            displayItems.filter(
                                process=>process.complain.toLowerCase().includes(query)||
                                process.claimed.toLowerCase().includes(query)||
                                process.number.toLowerCase().includes(query)||
                                process.due_date.toLowerCase().includes(query)
                                ).map((process, index)=>(
                                <tr key={index}>
                                    <td>{process.due_date.split("-").reverse().join("/")}</td>
                                    <td>{process.number}</td>
                                    <td>{process.complain}</td>
                                    <td>{process.claimed}</td>
                                    <td>{process.peaple.name}</td>
                                    <td className='link'><Link to={`/calculos-pendentes/${process.number}`}><FaEye/></Link></td>
                                </tr>
                            ))
                        }
                      </tbody>
                  </table>
              </div>

              <Pagination pageCount={pageCount} changePage={changePage}/>
              
          </section>
        </Container>
    );
}