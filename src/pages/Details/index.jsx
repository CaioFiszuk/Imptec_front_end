import { Container } from './styles';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export function Details(){
  const {number} = useParams();
  const [process, setProcess] = useState([]);

  const getOne = async()=>{
    const response =  await axios.get(`https://exato.m2fsolucoes.com/api/process/getByProcess/${number}`);

    const data = response.data;

    console.log(data);
    setProcess(data);
  }

    useEffect(()=>{
     getOne()
    }, []);

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
                          <tr>
                            <td>123456789</td>
                            <td>{process.number}</td>
                            <td>pessoa x</td>
                            <td>processo normal</td>
                            <td>coráo</td>
                            <td>10,00</td>
                          </tr>
                          </tbody>
                        </table>
                    </div>
                  </div>
              </div>   
            </div>
          </Container>
          );
    
}