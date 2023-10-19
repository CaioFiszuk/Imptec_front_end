import { Container } from './style';

export function Modal({isOpen, setOpen, dataNumber, dataComplain, dataClaimed, dataType, dataServiceName, dataPrice, dataPersonName, dataDueDate, dataStatus}){
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
                            <span><strong>Sacado:</strong>{dataPersonName}</span>
                            <span><strong>Vencimento:</strong>{dataDueDate}</span>
                            <span><strong>Período:</strong>01/08/2023 - 30/08/2023</span>
                          </div>

                          <div>
                          <span><strong>Valor Total:</strong>{dataPrice}</span>
                          <span><strong>Status:</strong><p>{dataStatus}</p></span>
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
                              <td>{dataNumber}</td>
                              <td>{dataComplain}</td>
                              <td>{dataClaimed}</td>
                              <td>{dataType}</td>
                              <td>{dataServiceName}</td>
                              <td>{dataPrice}</td>
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