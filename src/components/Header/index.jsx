import { Container } from './styles';

import { FiLogOut } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <div className='menu'>
                <div className='logo'>IMPTEC</div>
                <ul>
                    <li><Link to="/" className='firstLink'><strong>Voltar para o menu inicial</strong></Link></li>
                    <li><a href="#"><strong>Opções de Cálculo</strong></a></li>
                    <li><a href="#"><strong>Contatos</strong></a></li>
                </ul>
            </div>

            <FiLogOut />
              
        </Container>
    );
}