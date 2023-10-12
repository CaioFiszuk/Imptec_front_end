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
                    <select>
                      <option value="">Selecione</option>
                      <option value="Liquidação">Liquidação</option>
                      <option value="Contestação">Contestação</option>
                    </select>
                  </div>
                  <div className='field'>
                    <label>Tipo de Trabalho</label>
                    <select>
                      <option value="">Selecione</option>
                      <option value="1">Inicial</option>
                      <option value="2">Sentença</option>
                      <option value="3">Sentença Recurso Ordinário</option>
                      <option value="4">Acórdão</option>
                      <option value="5">Acórdão Recurso Ordinário</option>
                      <option value="6">Acórdão Recurso de Revista</option>
                      <option value="7">Contestar Cálculo Reclamante</option>
                      <option value="9">Contestar Cálculo Reclamada</option>
                      <option value="10">Contestar Laudo Pericial</option>
                      <option value="11">Embargos de Execução</option>
                      <option value="13">Descriminização de Verbas</option>
                    </select>
                  </div>
                  <div className='field'>
                    <label>Prazo de Entrega</label>
                    <input type="date" />
                  </div>
                  <div className='field'>
                    <label>Solicitante</label>
                    <select>
                     <option value="">Selecione</option>
                     <option value="4">Advogado 1</option>
                     <option value="6">Advogado 2</option>
                     <option value="8">Advogado 4</option>
                     <option value="9">Advogado 5</option>
                    </select>
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