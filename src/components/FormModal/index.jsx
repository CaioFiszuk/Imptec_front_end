import { Container, Button } from './style';

export function FormModal({isOpen, setOpen}){
    if(isOpen){
        return(
            <Container>
              <div className="background">
                 <div className="modal">
                   <div className="modalHeader">
                     <h2>Detalhe do processo</h2>
                     <span onClick={()=>setOpen(!isOpen)}><strong>X</strong></span>
                   </div> 
                   <div className="modalBody">
                     <section>
                        <fieldset>
                            <div className='field'>
                                <label>Nº do Processo</label>
                                <input type="text" />
                            </div>
                            <div className='field'>
                                <label>Tipo de Solicitação</label>
                                <select>Contestação</select>
                            </div>
                            <div className='field'>
                                <label>Tipo de Trabalho</label>
                                <select>Inicial</select>
                            </div>
                            <div className='field'>
                                <label>Prazo de Entrega</label>
                                <input type="date" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className='field'>
                                <label>Solicitante</label>
                                <select>Advogado 1</select>
                            </div>
                            <div className='field'>
                                <label>Reclamante</label>
                                <input type="text" />
                            </div>
                            <div className='field'>
                                <label>Reclamado</label>
                                <input type="text" />
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
                   </div> 
                 </div>   
              </div>
            </Container>
           );
    }
}