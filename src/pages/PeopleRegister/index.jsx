import { useState } from 'react';
import axios from 'axios';

//Styles
import { Container, Form, Button } from './styles';

//Components
import { Header } from '../../components/Header/index';

//Icons
import { BiSolidUpArrow } from 'react-icons/bi';

export function PeopleRegister(){
   const [name, setName] = useState("");
   const [document, setDocument] = useState("");
   const [type, setType] = useState("");
   const [address, setAddress] = useState("");
   const [complement, setComplement] = useState("");
   const [zipCode, setZipCode] = useState("");
   const [neighborhood, setNeighborhood] = useState("");
   const [city, setCity] = useState("");
   const [uf, setUf] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [company, setCompany] = useState("");
   const [response, setResponse] = useState("");

   
   async function handleRegister(){
     
    const token = localStorage.getItem("@imptec:token");
   
    const payload = {
      name: name,
      document: document,
      type: type,
      address: address,
      complement: complement,
      neighborhood: neighborhood,
      zipcode: zipCode,
      city: city,
      uf: uf,
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
      const res = await axios.post("https://exato.m2fsolucoes.com/api/peaple/create", payload, { headers });
      setResponse(res.data);

      console.log(response);
    } catch (error) {
      alert(error);
    }
    
  }

    return(
        <Container>
           <Header />

            <Form>
              <div className='formTitle'>
                <h2>Pessoas [Cadastro]</h2>
                <BiSolidUpArrow />
              </div>

              <fieldset>
               <div className='row'>
                 <div className='field'>
                   <label>Nome</label>
                   <input 
                   type="text" 
                   className='sizeFour'
                   onChange={e => setName(e.target.value)}
                   />
                 </div>
                 <div className='field'>
                   <label>Documento(CPF/CNPJ)</label>
                   <input 
                   type="text" 
                   className='sizeTwo'
                   onChange={e => setDocument(e.target.value)}
                   />
                 </div>
                 <div className='field'>
                   <label>Tipo de Cadastro</label>
                   <select 
                     className='sizeOne'
                     onChange={e => setType(e.target.value)}
                     value={type}
                   >
                     <option value="">Selecione</option>
                     <option value="ADV">Advogado</option>
                     <option value="ADM">Administrador</option>
                     <option value="CLL">Calculista</option>
                   </select>
                 </div>
               </div>

               <div className='row'>
                 <div className='field'>
                   <label>Endereço</label>
                   <input 
                   type="text" 
                   className='sizeFour'
                   onChange={e => setAddress(e.target.value)}
                   />
                 </div>
                 <div className='field'>
                   <label>Complemento</label>
                   <input 
                   type="text" 
                   className='sizeTwo'
                   onChange={e => setComplement(e.target.value)}
                   />
                 </div>
                 <div className='field'>
                   <label>CEP</label>
                   <input 
                   type="text" 
                   className='sizeOne'
                   onChange={e => setZipCode(e.target.value)}
                   />
                 </div>
               </div>

               <div className='row'>
                 <div className='field'>
                   <label>Bairro</label>
                   <input 
                   type="text" 
                   className='sizeThree'
                   onChange={e => setNeighborhood(e.target.value)}
                   />
                 </div>
                 <div className='field'>
                   <label>Cidade</label>
                   <input 
                   type="text" 
                   className='sizeThree'
                   onChange={e => setCity(e.target.value)}
                   />
                 </div>
                 <div className='field'>
                   <label>UF</label>
                   <input 
                   type="text" 
                   className='sizeOne'
                   onChange={e => setUf(e.target.value)}
                   />
                 </div>
               </div>

                <div className='row'>
                  <div className='field'>
                   <label>Telefone</label>
                   <input 
                   type="text" 
                   className='sizeTwo'
                   onChange={e => setPhone(e.target.value)}
                   />
                  </div>
                  <div className='field'>
                   <label>E-mail</label>
                   <input 
                   type="text"
                   className='sizeTwo'
                   onChange={e => setEmail(e.target.value)}
                   />
                  </div>
                  <div className='field'>
                    <label>Empresa</label>
                    <input 
                    type="text" 
                    className='sizeTwo'
                    onChange={e => setCompany(e.target.value)}
                    />
                  </div>
                </div>
    
              </fieldset>

              <Button 
              type='button'
              onClick={handleRegister}
              >Solicitar [C/L]</Button>

            </Form>
        </Container>
    );
}