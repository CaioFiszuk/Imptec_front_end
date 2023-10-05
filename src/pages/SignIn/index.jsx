import { useState } from 'react';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth.jsx';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    
    function handleSignIn(){
        signIn({email, password})
    }

    return(
        <Container>
           <main>
              <div>
                  <div>
                      <label>E-mail</label>
                      <input type="email" onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div>
                      <label>Senha</label>
                      <input type="password" onChange={e => setPassword(e.target.value)}/>
                  </div>
              </div>

              <button type='button' onClick={handleSignIn}>Login</button>
           </main>
        </Container>
    );
}