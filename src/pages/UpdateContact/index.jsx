import { Container } from './styles';
import { useEffect, useState } from "react";
//import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export function UpdateContact(){
    //const {theId} = useParams();
    const [contact, setContact] = useState([]);
    //const navigate = useNavigate();

    
    const getContact = async()=>{
        

        const response =  await axios.post(`https://exato.m2fsolucoes.com/api/peaple/getByid`);
    
        const data = response.data;

        setContact(data);
      }
    
        useEffect(()=>{
         getContact()
        }, []);

        return(
            <Container>
            {
    contact.map((cont, index)=>(
      <div className='background' key={index}>
      <div className='modal'>
        <div className='modalHeader'>
          <h2>Atualizar Contato</h2>
          <span><strong>X</strong></span>
        </div>
        <div className="modalBody">
           <div className='field'>
              <label>Nome</label>
              <input 
              type="text"
              value={cont.name} 
              />
           </div>

           <div className='field'>
              <label>E-mail</label>
              <input 
              type="text"
              value={cont.email}  
              />
           </div>

           <div className='field'>
              <label>Telefone</label>
              <input 
              type="text"
              value={cont.phone}  
              />
           </div>

           <div className='field'>
              <label>Empresa</label>
              <input 
              type="text" 
              value={cont.company} 
              />
           </div>
        </div>
      </div>
    </div>
    ))
  }
</Container>
);

}