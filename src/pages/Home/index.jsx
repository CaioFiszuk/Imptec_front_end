import axios from 'axios';
import { useState, useEffect } from 'react';

//Styles
import { Container } from './styles';

//Components
import { Header } from '../../components/Header/index';

//Icons
import { BsGraphUpArrow, BsClockFill,BsFillEnvelopeFill, BsTable, BsFillCalculatorFill } from 'react-icons/bs';
import { ImHammer2 } from 'react-icons/im';
import { AiFillWarning } from 'react-icons/ai';

//Router
import { Link } from 'react-router-dom';

export function Home(){
  const [mostRecent, setMostRecent] = useState([]);
  const [stockTotal, setStockTotal] = useState("");
  const [pendingCalculations, setPendingCalculations] = useState("");
  const [contestations, setContestations] = useState("");
   
  
  const getMostRecent = async ()=>{
    const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getByLast");

    const data = response.data;

    console.log(data);

    setMostRecent(data);
  }

  const getStocks = async ()=>{
    const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getAll");

    const data = response.data;
    setStockTotal(data.length);
  }

  const getPendingsCalculations = async ()=>{
    const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getByStatus/Novo");

    const data = response.data;
    setPendingCalculations(data.length);
  }

  const getContestations = async ()=>{
    const response = await axios.get("https://exato.m2fsolucoes.com/api/process/getByType/Contestação");

    const data = response.data;
    setContestations(data.length);
  }

  useEffect(()=>{
    getMostRecent()
    getStocks()
    getPendingsCalculations()
    getContestations()
 }, []);

    return(
     <Container>
        <Header />
    <main>
        <div className="actions">
            <div>
              <Link to="/requisicao-de-calculos">
                <BsFillCalculatorFill />
                <span>Solicitar Cálculos</span>
              </Link>
            </div>
            <div>
              <Link to="/">
                <BsGraphUpArrow />
                <span>Relatórios e Faturamento</span>
              </Link>
            </div>
            <div>
              <Link to="/historico-de-calculos">
                <BsTable />
                <span>Histórico</span>
              </Link>
            </div>
            <div>
             <Link to="/calculos-pendentes">
              <BsClockFill />
              <span>Cálculos Pendentes</span>
             </Link>
            </div>
        </div>
        
        <div className="screens">
            <div className="stock">
              <span>{stockTotal}</span>
               <h3>Bolsão de solicitações</h3>
               <p>Lista com todas as solicitações de cálculos</p>
            </div>

            <div className="calculations">
              <div className='first'>
                <span>H</span> 
                <div>
                    <h3>Histórico de Cálculos</h3>
                    <p>{stockTotal}</p>
                </div>
              </div>
             
             <div className='second'>
                <AiFillWarning />
                <div> 
                    <h3>Cálculos Pendentes</h3>
                    <p>{pendingCalculations}</p>   
                </div>
              </div>
             
              <div className='third'>
                <BsFillEnvelopeFill /> 
                <div>
                    <h3>Novas mensagens</h3>
                    <p>1</p>
                </div>
              </div>
              <div className='fourty'>
                <ImHammer2 />
                <div>
                    <h3>Contestações</h3>
                    <p>{contestations}</p>
                </div>
              </div>
            </div>
        </div>
        
        <div className="mostRecent">
            <h3>O que há de novo?</h3>
                {
                  mostRecent.map((recent, index)=>(
                    <ul key={index}>
                      <li><Link to={`/processo/${recent.number}`}>{recent.number}</Link></li>
                    </ul>
                  ))
                }
        </div>   

    </main>

     </Container>
    );
}