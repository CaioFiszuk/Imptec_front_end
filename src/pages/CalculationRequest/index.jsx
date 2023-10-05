import { Container, Form, Button } from './styles';

import { Header } from '../../components/Header/index';

import { BiSolidUpArrow } from 'react-icons/bi';

export function CalculationRequest(){
    return(
        <Container>
          <Header />
           
            <Form>
              <div className='formTitle'>
                 <h2>Solicitar [Contestação] [Liquidação]</h2>
                  
                <BiSolidUpArrow />
               </div>

               <fieldset>
                  <div className='field'>
                    <label>Nº do Processo</label>
                    <input type="text" />
                  </div>
                  <div className='field'>
                    <label>Tipo de Solicitação</label>
                    <select>Contestação</select>
                  </div>
                  <div className='field'>
                    <label>Tipo de Trabalho</label>
                    <select>Selecione</select>
                  </div>
                  <div className='field'>
                    <label>Prazo de Entrega</label>
                    <input type="date" />
                  </div>
                  <div className='field'>
                    <label>Solicitante</label>
                    <select>Selecione</select>
                  </div>
                  <div className='field'>
                    <label>Reclamante</label>
                    <input type="text" />
                  </div>
                  <div className='field'>
                    <label>Reclamada</label>
                    <input type="text" />
                  </div>
               </fieldset>

               <div className='textarea'>
                    <label>Observações</label>
                    <textarea></textarea>
               </div>

               <div className='file'>
                    <label>Anexar Arquivo(s) do Processo</label>
                    <input type="file"/>
              </div>

               <Button>Solicitar [C/L]</Button>

            </Form>
        </Container>
    );
}