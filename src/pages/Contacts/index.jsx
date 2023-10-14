import axios from 'axios';
import { useEffect, useState } from 'react';

//Styles
import { Container } from "./styles";

//Components
import { Header } from '../../components/Header/index';

//Icons
import { BiSolidUser } from 'react-icons/bi';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export function Contacts(){
    const [lawyers, setLawyers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [accountings, setAccountings] = useState([]);
    const token = localStorage.getItem("@imptec:token");


       const deletePerson =  async (id)=>{
         const payload = {
          id: id
        };

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        };

          await axios.post(`https://exato.m2fsolucoes.com/api/peaple/delete/`, payload, {headers});
       }

      const getLawyers = async ()=>{
        const response = await axios.get("https://exato.m2fsolucoes.com/api/peaple/getAll/ADV");

        const data = response.data;

        setLawyers(data);
      }

      const getAdmins = async ()=>{
        const response = await axios.get("https://exato.m2fsolucoes.com/api/peaple/getAll/ADM");

        const data = response.data;

        setAdmins(data);
      }

      const getAccountings = async ()=>{
        const response = await axios.get("https://exato.m2fsolucoes.com/api/peaple/getAll/CLL");

        const data = response.data;

        setAccountings(data);
      }
  
       useEffect(()=>{
          getLawyers();
          getAdmins();
          getAccountings();
       }, []);

        
        useEffect(()=>{
            const tabs = document.querySelectorAll('.tab');
            const contents = document.querySelectorAll('.content');
        
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(tab => tab.classList.remove('active'));
                    contents.forEach(content => content.style.display = 'none');
                    this.classList.add('active');
                    document.querySelector(`#content${this.id.slice(-1)}`).style.display = 'block';
                });
            });
        }, []);

    return(
        <Container>
            <Header />

            <section>
            <div className='title'>
                <h2>Contatos</h2>
            </div>

            <div className='searchField'>
                <input type="search" placeholder='Pesquisar' />
            </div>

            <div className="tabs">
                <div className="tab" id="tab1"><BiSolidUser />Advogados</div>
                <div className="tab" id="tab2"><BiSolidUser />Administradores</div>
                <div className="tab" id="tab3"><BiSolidUser />Calculistas</div>
            </div>

            <div className="content" id="content1">
               <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Empresa</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                {(
                  lawyers.map((lawyer)=>(
                    <tr key={lawyer.id}>
                       <td>{lawyer.name}</td>
                       <td>{lawyer.email}</td>
                       <td>{lawyer.phone}</td>
                       <td>{lawyer.company}</td>
                       <td><AiFillEdit /> <AiFillDelete onClick={()=>deletePerson(lawyer.id)}/></td>
                    </tr>
                    ))
                  )  
                }
                </tbody>
               </table>
            </div>

            <div className="content" id="content2">
            <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Empresa</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                {(
                  admins.map((admin)=>(
                    <tr key={admin.id}>
                       <td>{admin.name}</td>
                       <td>{admin.email}</td>
                       <td>{admin.phone}</td>
                       <td>{admin.company}</td>
                       <td><AiFillEdit /> <AiFillDelete /></td>
                    </tr>
                    ))
                  )  
                }
                </tbody>
               </table>
            </div>

            <div className="content" id="content3">
            <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Empresa</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                {(
                  accountings.map((accounting)=>(
                    <tr key={accounting.id}>
                       <td>{accounting.name}</td>
                       <td>{accounting.email}</td>
                       <td>{accounting.phone}</td>
                       <td>{accounting.company}</td>
                       <td><AiFillEdit /> <AiFillDelete onClick={()=> deletePerson(accounting.id)}/></td>
                    </tr>
                    ))
                  )  
                }
                </tbody>
               </table>
            </div>

        </section>
        </Container>
    );
}