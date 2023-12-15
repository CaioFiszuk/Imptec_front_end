import { Container, Button } from './styles';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export function UpdateContact(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [person, setPerson] = useState({
      name:"",
      email:"",
      phone:"",
      company:""
    });

    const handleChange = (e) => {
      const personClone = { ...person };
      personClone[e.target.name] = e.target.value;
      setPerson(personClone);
    };

    const handleUpdate = async()=>{
      const token = localStorage.getItem("@imptec:token");
      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      };

      try {
        await axios.post("https://exato.m2fsolucoes.com/api/peaple/update", person, { headers });

        navigate(-1);

      } catch (error) {
        alert(error);
      }
    }

    useEffect(()=>{
      const token = localStorage.getItem("@imptec:token");

      const payload = {
       id: id
      }
 
      const headers = {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`,
       'Accept': 'application/json'
       };
 
       
        axios.post("https://exato.m2fsolucoes.com/api/peaple/getById", payload, { headers }).then(res=>{
          setPerson(res.data)
          
        })
        .catch(err=>console.log(err))


      }, [id]);
    
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
                  value={person.name}
                  onChange={handleChange}
                  name='name'
               />
             </div>

             <div className='field'>
              <label>E-mail</label>
              <input 
              type="text"
              value={person.email}
              onChange={handleChange}
              name='email'
              />
             </div>

             <div className='field'>
              <label>Telefone</label>
              <input 
              type="text"
              value={person.phone}
              onChange={handleChange}
              name="phone" 
              />
             </div>

             <div className='field'>
              <label>Empresa</label>
              <input 
              type="text"
              value={person.company}
              onChange={handleChange}
              name="company"
              />
             </div>
            </div>

            <Button onClick={handleUpdate}>Atualizar</Button>
           </div>
         </div>
        }
      </Container>
    );

}