import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

//Styles
import { Container, Form, Button } from './styles';

//Components
import { Header } from '../../components/Header/index';

//Icons
import { BiSolidUpArrow } from 'react-icons/bi';

//Router
import { useNavigate } from 'react-router-dom';

export function CalculationRequest(){
   const [number, setNumber] = useState("");
   const [type, setType] = useState("");
   const [service, setService] = useState("");
   const [dueDate, setDueDate] = useState("");
   const [requesting, setRequesting] = useState("");
   const [complain, setComplain] = useState("");
   const [claimed, setClaimed] = useState("");
   const [notes, setNotes] = useState("");
   const [file, setFile] = useState("");
   const [lawyers, setLawyers] = useState([]);
   const navigate = useNavigate();

   async function createProcess(){
    console.log('teste')
    const token = localStorage.getItem("@imptec:token");
   
    const payload = {
      number: number,
      type: type,
      service_id: service,
      due_date: dueDate,
      requesting: requesting,
      complain: complain,
      claimed: claimed,
      notes: notes,
      file: file
    };
    
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
      
    };

    try {
      if(!number || !type || !service || !dueDate || !requesting || !complain || !claimed || !notes){
        Swal.fire({
          title: "Por favor, preencha todos os campos",
          icon: "warning",
          confirmButtonText: "Ok",
        });
      }else{
        await axios.post("https://exato.m2fsolucoes.com/api/process/create", payload, { headers });

        Swal.fire({
          title: "Success",
          icon: "success",
          timerProgressBar: true,
          confirmButtonText: "Ok"
        });

        navigate(-1);
      }

    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        confirmButtonText: "Ok"
      });
    }
   }

    const getLawyers =  async ()=>{
      const response = await axios.get("https://exato.m2fsolucoes.com/api/peaple/getAll/ADV");

      const data = response.data;
  
      setLawyers(data);
    }

    useEffect(()=>{
      getLawyers()
    }, []);

    return(
        <Container>
          <Header />
           
            <Form encType='multipart/form-data'>
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
                    <select
                      onChange={e => setRequesting(e.target.value)}
                      value={requesting}
                    >
                        <option value="">Selecione</option>
                        {
                            lawyers.map((lawyer, index)=>(
                                <option key={index} value={lawyer.id}>{lawyer.name}</option>
                            ))
                        }
                    </select>
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
                    <input type="file"
                    onChange={e => setFile(e.target.value)}/>
              </div>

               <Button type='button' onClick={createProcess}>Solicitar [C/L]</Button>

            </Form>
        </Container>
    );
}