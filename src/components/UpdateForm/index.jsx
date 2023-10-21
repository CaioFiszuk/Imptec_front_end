import { Container, Button } from './styles';
import axios from 'axios';
import { useState } from 'react';

export function UpdateForm({isOpen, setOpen, theName, thePhone, theEmail, theCompany}){
    const token = localStorage.getItem("@imptec:token");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [response, setResponse] = useState("");

    const updatePerson = async ()=>{
        const payload = {
          name: name,
          company: company,
          email: email,
          phone: phone
         };

         const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
         };

         try {
            const res = await axios.post("https://exato.m2fsolucoes.com/api/peaple/update", payload, headers);
            setResponse(res.data);
      
            console.log(response);
          } catch (error) {
            alert(error);
          }
       }

    if(isOpen){
        return(
            <Container>
              <div className="background">
                 <div className="modal">
                   <div className="modalHeader">
                     <h2>Editar</h2>
                     <span onClick={()=>setOpen(!isOpen)}><strong>X</strong></span>
                   </div> 
                   <div className="modalBody">
                     <section>
                        <fieldset>
                           <div className='field'>
                                <label>Nome</label>
                                <input 
                                type="text"
                                value={theName}
                                onChange={e => setName(e.target.value)} 
                                />
                            </div>
                            <div className='field'>
                                <label>Telefone</label>
                                <input 
                                type="text"
                                value={thePhone}
                                onChange={e => setPhone(e.target.value)} 
                                />
                            </div>
                            <div className='field'>
                                <label>E-mail</label>
                                <input 
                                type="email"
                                value={theEmail} 
                                onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <label>Empresa</label>
                                <input 
                                type="text"
                                value={theCompany}
                                onChange={e => setCompany(e.target.value)} 
                                />
                            </div>
                        </fieldset>

                        <Button onClick={()=>updatePerson()}>Atualizar [C/L]</Button>
                     </section>
                   </div> 
                 </div>   
              </div>
            </Container>
           );
    }
}