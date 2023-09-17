import { useState } from 'react';
import {
  emailValidation,
  nameValidation,
  fileValidation
} from '../validations/validations';
export default function Sectiontrabalheaqui() {
  // usando estados
  const [email, setEmail] = useState(''); //guardando email
  const [name, setName] = useState(''); //guardando senha
  const [file, setFile] = useState('')

  function handleClick(e) {
    e.preventDefault();
    if (validation() === true) {
      alert('Dados Enviados!');
    }
  }

  //  Validando login
  function validation() {
    const c1 = nameValidation(name);
    const c2 = emailValidation(email);
    const c3 = fileValidation(file)
    if (c1 === true && c2 === true && c3 === true) {
      return true;
    }
    return false;
  }
  return (
    <>
      <main>
        <div>
          <form>
            <input
              type='text'
              name='Nome'
              required
              placeholder='Nome'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='email'
              name='email'
              required
              placeholder='email@email.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type='file' name='arquivo' id='arquivo' required onChange={(e) => setFile(e.target.value)}/>

            <input type='submit' value='Enviar' onClick={handleClick} />
          </form>
        </div>
      </main>
    </>
  );
}
