import { Container } from './style';

export function Modal({isOpen, setOpen}){
    if(isOpen){
        return(
            <Container>
              <div className="background" onClick={()=>setOpen(!isOpen)}>
                 <div className="modal">
                   <div className="modalHeader">
                     <h2>Detalhe do faturamento</h2>
                   </div>
                
                    <div className='modalBody'>
                        <div className="info">
                          <div>
                            <span><strong>Sacado:</strong>Advogado 2</span>
                            <span><strong>Vencimento:</strong>10/09/2023</span>
                            <span><strong>Período:</strong>01/08/2023 - 30/08/2023</span>
                          </div>

                          <div>
                          <span><strong>Valor Total:</strong>R$ 60,00</span>
                          <span><strong>Status:</strong><p>Vencido</p></span>
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
                              <td>123456-78.9012.3.45.6790</td>
                              <td>Reclamante 96</td>
                              <td>Reclamado 9</td>
                              <td>Liquidação</td>
                              <td>Inicial</td>
                              <td>10,00</td>
                            </tr>
                            <tr>
                              <td>123456-78.9012.3.45.6790</td>
                              <td>Reclamante 96</td>
                              <td>Reclamado 9</td>
                              <td>Contestação</td>
                              <td>Inicial</td>
                              <td>10,00</td>
                            </tr>
                            <tr>
                              <td>123456-78.9012.3.45.6790</td>
                              <td>Reclamante 96</td>
                              <td>Reclamado 9</td>
                              <td>Liquidação</td>
                              <td>Inicial</td>
                              <td>10,00</td>
                            </tr>
                            <tr>
                              <td>123456-78.9012.3.45.6790</td>
                              <td>Reclamante 96</td>
                              <td>Reclamado 9</td>
                              <td>Contestação</td>
                              <td>Inicial</td>
                              <td>10,00</td>
                            </tr>
                            <tr>
                              <td>123456-78.9012.3.45.6790</td>
                              <td>Reclamante 96</td>
                              <td>Reclamado 9</td>
                              <td>Contestação</td>
                              <td>Inicial</td>
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
}