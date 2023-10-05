//Styles
import { Container } from './styles';

//Routes
//import { Link } from 'react-router-dom';

//Components
import { Header } from '../../components/Header/index';

//Icons
import { BiSolidCalculator } from 'react-icons/bi';
import { BsGraphUpArrow, BsFillPersonVcardFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { ImHammer2 } from 'react-icons/im';
import { AiFillWarning } from 'react-icons/ai';
import { FaPaperPlane, FaUsers, FaRegCalendar } from 'react-icons/fa';
import { PiNotebookFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export function Home(){
    return(
     <Container>
        <Header />
    <main>
        <div className="actions">
            <div>
              <Link to="/requisicao-de-calculos">
                <BiSolidCalculator />
                <span>Solicitar Liquidação</span>
              </Link>
            </div>
            <div>
              <BsGraphUpArrow />
              <span>Gráficos Relatórios</span>
            </div>
            <div>
              <Link to="/requisicao-de-calculos">
                <ImHammer2 />
                <span>Solicitar Contestação</span>
              </Link>
            </div>
            <div>
              <BsFillPersonVcardFill />
              <span>Gerir Usuários</span>
            </div>
        </div>
        
        <div className="links">
            <div className="stock">
              <Link to="/bolsao-de-calculos">
              <span>11</span>
               <h3>Bolsão de solicitações</h3>
               <p>Lista com todas as solicitações de cálculos</p>
              </Link>
            </div>
            <div className="calculations">
              <div className='first'>
                <span>H</span> 
                <div>
                <Link to='/historico-de-calculos'>
                    <h3>Histórico de Cálculos</h3>
                    <p>13</p>
                </Link>
                </div>
              </div>
             
             <div className='second'>
                <AiFillWarning />
                <div> 
                  <Link to="/calculos-pendentes">
                    <h3>Cálculos Pendentes</h3>
                    <p>12</p>  
                  </Link> 
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
                    <p>13</p>
                </div>
              </div>
            </div>
        </div>
        
        <div className="news">
            <h3>O que há de novo?</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>   

        <div className="agenda">
            <div>
             <FaUsers />

             <div>
                <h3>Contatos internos</h3>
                <p>6</p>
             </div>
            </div>
            <div>
             <PiNotebookFill />

             <div>
                <h3>Contatos clientes</h3>
                <p>4</p>
             </div>
            </div>
            <div>
              <FaRegCalendar />

              <div>
                <h3>Agenda corporativa</h3>
                <p>2</p>
             </div>
            </div>
            <div>
              <FaPaperPlane />

              <div>
                <h3>Solicitação aos administradores</h3>
                <p>1</p>
             </div>
            </div>
        </div>   

        <div className="graphs">
            <div>
               <h4>Metas do Mês - Cálculos</h4>
               <h5>65%</h5>
               <p>13 cálculos concluídos num total de 20</p>
            </div>
            <div>
               <h4>Volumetria mensal</h4>
               <h5>Cálculos</h5>
            </div>
            <div>
               <h4>Metas do Mês - Contestações</h4>
               <h5>50%</h5>
               <p>2 contestações concluídas num total de 4</p>
            </div>
            <div>
               <h4>Volumetria mensal</h4>
               <h5>Contestações</h5>
            </div>
        </div>
    </main>

     </Container>
    );
}