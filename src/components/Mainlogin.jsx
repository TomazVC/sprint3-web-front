import { useState } from 'react';
import '../style/components/mainlogin.scss';
import { emailValidation, passwordValidation } from '../validations/validations';

export default function Mainlogin() {
  // usando estados
  const [email, setEmail] = useState(''); //guardando email
  const [pass, setPass] = useState(''); //guardando senha

    function handleClick(e) {
      e.preventDefault();
      if (validation() === true) {
        alert("Logado com sucesso!");
      }
    }

    //  Validando login
      function validation() {
        const c1 = emailValidation(email);
        const c2 = passwordValidation(pass);
        if (c1 === true && c2 === true) {
          return true;
        }
        return false;
      }
  return (
    <>
      <main>
        <div>
          <form>
            <h2>Login</h2>
            <input
              type='text'
              name='email'
              className='email'
              placeholder='email@email.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className='textEmail'></small>
            <input
              type='password'
              name='senha'
              className='senha'
              placeholder='senha'
              onChange={(e) => setPass(e.target.value)}
            />
            <small className='textPassword'></small>
            <button onClick={handleClick}>Login</button>
            <small className='textForm'></small>
            <small className='textSucess'></small>
          </form>
        </div>
      </main>
    </>
  );
}
