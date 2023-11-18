import { Container, Button } from './styles';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export function UpdateContact(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    //const [person, setPerson] = useState("");

    const handleUpdate = async()=>{
      const token = localStorage.getItem("@imptec:token");

      const payload = {
        id: id,
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
        /*const res =*/ await axios.post("https://exato.m2fsolucoes.com/api/peaple/update", payload, { headers });

        //console.log(res.data);

      } catch (error) {
        alert(error);
      }
    }

    const getPerson = async()=>{
      const token = localStorage.getItem("@imptec:token");

     const payload = {
      id: id
     }

     const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
      };

      try
      {
        /*const response = */await axios.post("https://exato.m2fsolucoes.com/api/peaple/getById", payload, { headers });

        //const data = response.data;
        //setPerson(data);
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      getPerson()
    }, []);
    
      return(
      <Container>
        {
          <div className='background'>
           <div className='modal'>
            <div className='modalHeader'>
              <h2>Atualizar Contato</h2>
              <span onClick={()=>navigate(-1)}><strong>X</strong></span>
            </div>

            <div className="modalBody">
             <div className='field'>
               <label>Nome</label>
               <input 
                type="text"
                onChange={e => setName(e.target.value)}
               />
             </div>

             <div className='field'>
              <label>E-mail</label>
              <input 
              type="text"
              onChange={e => setEmail(e.target.value)}  
              />
             </div>

             <div className='field'>
              <label>Telefone</label>
              <input 
              type="text"
              onChange={e => setPhone(e.target.value)}  
              />
             </div>

             <div className='field'>
              <label>Empresa</label>
              <input 
              type="text" 
              onChange={e => setCompany(e.target.value)} 
              />
             </div>
            </div>

            <Button onClick={()=>handleUpdate()}>Atualizar</Button>
           </div>
         </div>
        }
      </Container>
    );

}