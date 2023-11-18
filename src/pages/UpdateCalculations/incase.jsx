import { Container, Button } from './styles';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

export function UpdateCalculations(){
    const {number} = useParams();
    const [numberProcess, setNumberProcess] = useState("");
    const [type, setType] = useState("");
    const [service, setService] = useState("");
    const [complain, setComplain] = useState("");
    const [claimed, setClaimed] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [requesting, setRequesting] = useState("");
    const [process, setProcess] = useState([]);
    const navigate = useNavigate();

    const getProcess = async ()=>{
      const payload = {
        number: numberProcess,
        type: type,
        service_id: service,
        due_date: dueDate,
        requesting: requesting,
        complain: complain,
        claimed: claimed,
      }

      const response = await axios.get(`https://exato.m2fsolucoes.com/api/process/getByProcess/${number}`, payload);

      const data = response.data;

      console.log(data);

      setProcess(data);
    }

    useEffect(()=>{
        getProcess()
       }, []);

    return(
        <Container>
          <div className="background">
             <div className="modal">
               <div className="modalHeader">
                 <h2>Detalhe do processo</h2>
                 <span onClick={()=>navigate(-1)}><strong>X</strong></span>
               </div> 
               <div className="modalBody">
                {
                    process.map((pro, index)=>(
                    <section key={index}>
                        <fieldset>
                            <div className='field'>
                                <label>Nº do Processo</label>
                                <input 
                                type="text" 
                                value={pro.number}
                                onChange={e => setNumberProcess(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <label>Tipo de Solicitação</label>
                                <select 
                                value={pro.type}
                                onChange={e => setType(e.target.value)}
                                >
                                <option value="Liquidação">Liquidação</option>
                                <option value="Contestação">Contestação</option>
                                </select>
                            </div>
                            <div className='field'>
                                <label>Tipo de Trabalho</label>
                                <select 
                                value={pro.service_id}
                                onChange={e => setService(e.target.value)}
                                >
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
                                value={pro.due_date}
                                onChange={e => setDueDate(e.target.value)} 
                                />
                            </div>
                        </fieldset>
    
                        <fieldset>
                            <div className='field'>
                                <label>Solicitante</label>
                                <input 
                                type="text" 
                                value='5' 
                                onChange={e => setRequesting(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <label>Reclamante</label>
                                <input 
                                type="text" 
                                value={"sun kil moon"}
                                onChange={e => setComplain(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <label>Reclamado</label>
                                <input 
                                type="text" 
                                value={pro.claimed}
                                onChange={e => setClaimed(e.target.value)}
                                />
                            </div>
                        </fieldset>
    
                        <fieldset>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Arquivos Anexados</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='field'>
                                <label>Anexar Arquivo(s) do Processo</label>
                                <input type="file" className='file'/>
                            </div>
                        </fieldset>
    
                        <Button>Atualizar [C/L]</Button>
                     </section>
                    ))
                }
               </div> 
             </div>   
          </div>
        </Container>
       );
}