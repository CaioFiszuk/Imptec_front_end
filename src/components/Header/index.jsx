//Styles
import { Container } from './styles';

//Hooks
import { useAuth } from '../../hooks/auth.jsx';

//Icons
import { FiLogOut } from 'react-icons/fi';
import { BiSolidDownArrow } from 'react-icons/bi';

//Router
import { Link } from 'react-router-dom';

export function Header(){
    const { signOut } = useAuth();

    return(
        <Container>
            <div className='menu'>
                <div className='logo'>IMPTEC</div>
                <ul>
                    <li>
                        <Link to="/" className='firstLink'><strong>Voltar para o menu inicial</strong></Link>
                    </li>
                    <li className='dropdown'>
                        <a href="#"><strong>Opções de Cálculo <BiSolidDownArrow /></strong></a>
                        <ul className='dropdown-menu'>
                           <li><Link to="/cadastro"><strong>Cadastro de Pessoas</strong></Link></li>
                           <li><a href="#">Criar Cálculo</a></li>
                           <li><a href="#">Bolsão de Solicitações</a></li>
                           <li><a href="#">Histórico de Cálculos</a></li>
                           <li><a href="#">Cálculos Pendentes</a></li>
                           <li><a href="#">Contestações Pendentes</a></li>
                           <li><a href="#">Cálculos Faturados</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contatos"><strong>Contatos</strong></Link>
                    </li>
                </ul>
            </div>

              <Link to="/">
                 <FiLogOut onClick={signOut}/>
              </Link>

              
        </Container>
    );
}