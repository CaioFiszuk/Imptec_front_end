import { Container, Button } from './styles';

import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

export function UpdateCalculations(){
    const navigate = useNavigate();
    const {number} = useParams();

    const [process, setProcess] = useState({
      number: "",
      type: "",
      service_id: "",
      due_date: "",
      requesting: "",
      complain: "",
      claimed: "", 
      id: "",
    });

    const handleChange = (e) => {
      const processClone = { ...process };
      processClone[e.target.name] = e.target.value;
      setProcess(processClone);
    };
 
    useEffect(()=>{
      axios.get(`https://exato.m2fsolucoes.com/api/process/getByProcess/${number}`)
      .then(res=>{
        console.log(res)
        setProcess(res.data[0])
      })
      .catch(err=>console.log(err))
    }, [number]);

    const handleUpdate = async ()=>{
      const token = localStorage.getItem("@imptec:token");

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      };

      try
      {
        const response = await axios.post("https://exato.m2fsolucoes.com/api/process/update", process, { headers });

        const data = response.data;
  
        console.log(data);
        navigate(-1);

      }catch(error){
        console.log(error);
      }

    }

    

    return(
        <Container>

          <div className="background">
             <div className="modal">
               <div className="modalHeader">
                 <h2>Detalhe do processo</h2>
                 <span onClick={()=>navigate(-1)}><strong>X</strong></span>
               </div> 
               <div className="modalBody">
                 <section>
                   <fieldset>
                     <div className='field'>
 
                      <input type="hidden" name="id" value={process.id}/>

                      <label>Nº do Processo</label>
                      <input 
                        type="text" 
                        value={process.number}
                        onChange={handleChange}
                        name='number'
                      />
                     </div>

                     <div className='field'>
                      <label>Tipo de Solicitação</label>
                      <select 
                        value={process.type}
                        onChange={handleChange}
                        name='type'
                      >
                        <option value="Liquidação">Liquidação</option>
                        <option value="Contestação">Contestação</option>
                      </select>
                     </div>

                     <div className='field'>
                      <label>Tipo de Trabalho</label>
                      <select 
                        value={process.service_id}
                        onChange={handleChange}
                        name='service_id'
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
                        value={process.due_date}
                        onChange={handleChange}
                        name='due_date' 
                      />
                     </div>
                    </fieldset>

                    <fieldset>
                     <div className='field'>
                      <label>Solicitante</label>
                      <input 
                        type="text"
                        value={process.requesting}
                        onChange={handleChange}
                        name='requesting'
                      />
                     </div>

                     <div className='field'>
                      <label>Reclamante</label>
                      <input 
                        type="text"
                        value={process.complain} 
                        onChange={handleChange}
                        name='complain'
                      />
                     </div>

                     <div className='field'>
                      <label>Reclamado</label>
                      <input 
                        type="text"
                        value={process.claimed} 
                        onChange={handleChange}
                        name="claimed"
                      />
                     </div>
                    </fieldset>

                  <Button onClick={()=>handleUpdate()}>Atualizar [C/L]</Button>
                 </section>
               </div> 
             </div>   
          </div>
        </Container>
       );
}