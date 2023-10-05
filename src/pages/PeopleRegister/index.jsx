//Styles
import { Container, Form, Button } from './styles';

//Components
import { Header } from '../../components/Header/index';

//Icons
import { BiSolidUpArrow } from 'react-icons/bi';

export function PeopleRegister(){
    return(
        <Container>
           <Header />

            <Form>
              <div className='formTitle'>
                <h2>Pessoas [Cadastro]</h2>
                <BiSolidUpArrow />
              </div>

              <fieldset>
               <div className='row'>
                 <div className='field'>
                   <label>Nome</label>
                   <input type="text" className='sizeFour'/>
                 </div>
                 <div className='field'>
                   <label>Documento(CPF/CNPJ)</label>
                   <input type="text" className='sizeTwo'/>
                 </div>
                 <div className='field'>
                   <label>Tipo de Cadastro</label>
                   <select className='sizeOne'>Selecione</select>
                 </div>
               </div>

               <div className='row'>
                 <div className='field'>
                   <label>Endereço</label>
                   <input type="text" className='sizeFour'/>
                 </div>
                 <div className='field'>
                   <label>Complemento</label>
                   <input type="text" className='sizeTwo'/>
                 </div>
                 <div className='field'>
                   <label>CEP</label>
                   <input type="text" className='sizeOne'/>
                 </div>
               </div>

               <div className='row'>
                 <div className='field'>
                   <label>Bairro</label>
                   <input type="text" className='sizeThree'/>
                 </div>
                 <div className='field'>
                   <label>Cidade</label>
                   <input type="text" className='sizeThree'/>
                 </div>
                 <div className='field'>
                   <label>UF</label>
                   <input type="text" className='sizeOne'/>
                 </div>
               </div>

                <div className='row'>
                  <div className='field'>
                   <label>Telefone</label>
                   <input type="text" className='sizeTwo'/>
                  </div>
                  <div className='field'>
                   <label>E-mail</label>
                   <input type="text" className='sizeTwo'/>
                  </div>
                  <div className='field'>
                    <label>Empresa</label>
                    <input type="text" className='sizeTwo'/>
                  </div>
                </div>
    
              </fieldset>

              <Button>Solicitar [C/L]</Button>
            </Form>
        </Container>
    );
}