import axios from 'axios';
import { useEffect, useState } from 'react';

//Styles
import { Container } from "./styles";

//Components
import { Header } from '../../components/Header/index';
import { Pagination } from '../../components/Pagination/index';

//Icons
import { BiSolidUser } from 'react-icons/bi';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

//Router
import { Link } from 'react-router-dom';

export function Contacts(){
    const [lawyers, setLawyers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [accountings, setAccountings] = useState([]);
    const [query, setQuery] = useState("");
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

          window.location.reload();
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

      //Pagination Variables
      const [pageNumber, setPageNumber] = useState(0);
      const itemsPerPage = 4;
      const pagesVisited = pageNumber * itemsPerPage;
       const displayLawyers = lawyers.slice(pagesVisited, pagesVisited + itemsPerPage);
       const displayAdmins = admins.slice(pagesVisited, pagesVisited + itemsPerPage);
       const displayAccountings = accountings.slice(pagesVisited, pagesVisited + itemsPerPage);
      const lawyersPageCount = Math.ceil(lawyers.length / itemsPerPage);
      const adminsPageCount = Math.ceil(admins.length / itemsPerPage);
      const accountingsPageCount = Math.ceil(accountings.length / itemsPerPage);
      const changePage = ({selected})=>{
         setPageNumber(selected);
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
                <input 
                type="search" 
                placeholder='Pesquisar' 
                onChange={e=>setQuery(e.target.value)}
                />
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
                  displayLawyers.filter(
                    lawyer=>lawyer.name.toLowerCase().includes(query)
                    ).map((lawyer, index)=>(
                    <tr key={index}>
                       <td>{lawyer.name}</td>
                       <td>{lawyer.email}</td>
                       <td>{lawyer.phone}</td>
                       <td>{lawyer.company}</td>
                       <td>
                         <Link to={`/atualizar-contato/${lawyer.id}`}><AiFillEdit/></Link>
                         <AiFillDelete onClick={()=>deletePerson(lawyer.id)}/>
                        </td>
                
                    </tr>
                    ))
                  )  
                }
                </tbody>
               </table>
               <Pagination pageCount={lawyersPageCount} changePage={changePage}/>
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
                  displayAdmins.filter(
                    admin=>admin.name.toLowerCase().includes(query)
                    ).map((admin)=>(
                    <tr key={admin.id}>
                       <td>{admin.name}</td>
                       <td>{admin.email}</td>
                       <td>{admin.phone}</td>
                       <td>{admin.company}</td>
                       <td>
                       <Link to={`/atualizar-contato/${admin.id}`}><AiFillEdit/></Link>
                        
                       <AiFillDelete onClick={()=>deletePerson(admin.id)}/>
                       </td>
                    </tr>
                    ))
                  )  
                }
                </tbody>
               </table>
               <Pagination pageCount={adminsPageCount} changePage={changePage}/>
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
                  displayAccountings.filter(
                    accounting=>accounting.name.toLowerCase().includes(query)
                    ).map((accounting)=>(
                    <tr key={accounting.id}>
                       <td>{accounting.name}</td>
                       <td>{accounting.email}</td>
                       <td>{accounting.phone}</td>
                       <td>{accounting.company}</td>
                       <td>
                       <Link to={`/atualizar-contato/${accounting.id}`}><AiFillEdit/></Link>

                       <AiFillDelete onClick={()=>deletePerson(accounting.id)}/>
                        </td>
                    </tr>
                    ))
                  )  
                }
                </tbody>
               </table>
               <Pagination pageCount={accountingsPageCount} changePage={changePage}/>
            </div>

        </section>
        </Container>
    );
}