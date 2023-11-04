import { Container } from './styles';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export function Details(){
  const {number} = useParams();
  const [process, setProcess] = useState([]);
  const navigate = useNavigate();

  const getOne = async()=>{
    const response =  await axios.get(`https://exato.m2fsolucoes.com/api/process/getByProcess/${number}`);

    const data = response.data;

    setProcess(data);
  }

    useEffect(()=>{
     getOne()
    }, []);

      return(
          <Container>
            <div className="background" onClick={()=>navigate(-1)}>
              {
                process.map((pro, index)=>(
                  <div className="modal" key={index}>
                    <div className="modalHeader">
                      <h2>Detalhe do faturamento</h2>
                    </div>
              
                    <div className='modalBody'>
                      <div className="info">
                        <div>
                          <span><strong>Sacado:</strong>{pro.peaple.name}</span>
                          <span><strong>Vencimento:</strong>{pro.due_date.split("-").reverse().join("/")}</span>
                          <span><strong>Período:</strong>01/08/2023 - 30/08/2023</span>
                        </div>

                        <div>
                        <span><strong>Valor Total:</strong>{pro.price}</span>
                        <span><strong>Status:</strong><p>{pro.status}</p></span>
                        </div>
                      </div>
                      <div className="modalTable">
                        <table>
                          <thead>
                          <tr>
                            <th>Processo</th>
                            <th>Reclamante</th>
                            <th>Reclamado</th>
                            <th>Solicitação</th>
                            <th>Trabalho</th>
                            <th>Valor</th>
                          </tr>
                          </thead>
                          <tbody>
                           <tr>
                            <td>{pro.number}</td>
                            <td>{pro.complain}</td>
                            <td>{pro.claimed}</td>
                            <td>{pro.type}</td>
                            <td>{pro.service.name}</td>
                            <td>{pro.price}</td>
                           </tr>
                          </tbody>
                        </table>
                    </div>
                  </div>
              </div>
              ))
              }   
            </div>
          </Container>
          );
    
}