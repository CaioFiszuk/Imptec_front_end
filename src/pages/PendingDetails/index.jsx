import { Container } from './styles';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export function PendingDetails(){
  const {number} = useParams();
  const [process, setProcess] = useState([]);

  const getOne = async()=>{
    const response =  await axios.get(`https://exato.m2fsolucoes.com/api/process/getByProcess/${number}`);

    const data = response.data;

    setProcess(data);
  }

    useEffect(()=>{
     getOne()
    }, []);

  const naosei = process[0];

  console.log(naosei.complain);
      return(
          <Container>
            <div className="background">
                <div className="modal">
                  <div className="modalHeader">
                    <h2>Detalhe do faturamento</h2>
                  </div>
              
                  <div className='modalBody'>
                      <div className="info">
                        <div>
                          <span><strong>Sacado:</strong>adevogado</span>
                          <span><strong>Vencimento:</strong>31/08/2030</span>
                          <span><strong>Período:</strong>01/08/2023 - 30/08/2023</span>
                        </div>

                        <div>
                        <span><strong>Valor Total:</strong>10,00</span>
                        <span><strong>Status:</strong><p>Sacado</p></span>
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
                          {
                            naosei.map((x, index)=>(
                              <tr key={index}>
                                <td>{x.complain}</td>
                              </tr>
                            ))
                          }
                          </tbody>
                        </table>
                    </div>
                  </div>
              </div>   
            </div>
          </Container>
          );
    
}