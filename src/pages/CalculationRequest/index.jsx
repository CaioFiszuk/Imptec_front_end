import { Container, Form, Button } from './styles';

import { useState } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header/index';

import { BiSolidUpArrow } from 'react-icons/bi';

export function CalculationRequest(){
   const [number, setNumber] = useState("");
   const [type, setType] = useState("");
   const [service, setService] = useState("");
   const [dueDate, setDueDate] = useState("");
   const [requesting, setRequesting] = useState("");
   const [complain, setComplain] = useState("");
   const [claimed, setClaimed] = useState("");
   const [notes, setNotes] = useState("");
   const [response, setResponse] = useState("");

   async function createProcess(){
    const token = localStorage.getItem("@imptec:token");
   
    const payload = {
      number: number,
      type: type,
      service_id: service,
      due_date: dueDate,
      requesting: requesting,
      complain: complain,
      claimed: claimed,
      notes: notes
    };
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    };

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/process/create", payload, { headers });
      setResponse(res.data);

      console.log(response);
    } catch (error) {
      alert(error);
    }
   }


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
                    <input 
                    type="text"
                    onChange={e => setNumber(e.target.value)} 
                    />
                  </div>
                  <div className='field'>
                    <label>Tipo de Solicitação</label>
                    <select
                      onChange={e => setType(e.target.value)}
                      value={type}
                    >
                      <option value="">Selecione</option>
                      <option value="Liquidação">Liquidação</option>
                      <option value="Contestação">Contestação</option>
                    </select>
                  </div>
                  <div className='field'>
                    <label>Tipo de Trabalho</label>
                    <select
                      onChange={e => setService(e.target.value)}
                      value={service}
                    >
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
                    <input 
                    type="date"
                    onChange={e => setDueDate(e.target.value)} 
                    />
                  </div>
                  <div className='field'>
                    <label>Solicitante</label>
                    <input 
                    type="text" 
                    onChange={e => setRequesting(e.target.value)}
                    />
                  </div>
                  <div className='field'>
                    <label>Reclamante</label>
                    <input 
                    type="text" 
                    onChange={e => setComplain(e.target.value)}
                    />
                  </div>
                  <div className='field'>
                    <label>Reclamada</label>
                    <input 
                    type="text" 
                    onChange={e => setClaimed(e.target.value)}
                    />
                  </div>
               </fieldset>

               <div className='textarea'>
                    <label>Observações</label>
                    <textarea onChange={e => setNotes(e.target.value)}></textarea>
               </div>

               <div className='file'>
                    <label>Anexar Arquivo(s) do Processo</label>
                    <input type="file"/>
              </div>

               <Button onClick={()=>createProcess()}>Solicitar [C/L]</Button>

            </Form>
        </Container>
    );
}