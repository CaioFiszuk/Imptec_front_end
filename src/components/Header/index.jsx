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
                <ul className='list'>
                    <li>
                        <Link to="/" className='firstLink'><strong>Voltar para o menu inicial</strong></Link>
                    </li>
                    <li className='dropdown'>
                        <a href="#" className='link'><strong>Opções de Cálculo <BiSolidDownArrow /></strong></a>
                        <ul className='dropdown-menu'>
                           <li><Link to="/cadastro"><strong>Cadastro de Pessoas</strong></Link></li>

                           <li><Link to="/requisicao-de-calculos" className='link'><strong>Criar Cálculo</strong></Link></li>

                           <li><Link to="/bolsao-de-calculos" className='link'><strong>Bolsão de Solicitações</strong></Link></li>

                           <li><Link to="/historico-de-calculos" className='link'><strong>Histórico de Cálculos</strong></Link></li>

                           <li><Link to="/calculos-pendentes" className='link'><strong>Cálculos Pendentes</strong></Link></li>

                           <li><Link to="/contestacoes-pendentes" className='link'><strong>Contestações Pendentes</strong></Link></li>

                           <li><Link to="/calculos-faturados" className='link'><strong>Cálculos Faturados</strong></Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contatos" className='link'><strong>Contatos</strong></Link>
                    </li>
                </ul>
            </div>

              <Link to="/" className='logout'>
                 <FiLogOut onClick={signOut}/>
              </Link>

              
        </Container>
    );
}