import { useState } from 'react';
import InputMask from 'react-input-mask';
import '../style/components/mainhome.scss';
import { nameValidation, emailValidation, telValidation } from '../validations/validations';

export default function Mainhome() {
  // Usando estados
  const [name, setName] = useState(''); //guardando nome
  const [email, setEmail] = useState(''); //guardando email
  const [tel, setTel] = useState(''); //guardando telefone

  // Função que escuta quando o click acontece, dispara as validações e em caso de validação correta, dispara um alerta de cadastro realizado.

  function handleClick(e) {
    e.preventDefault();
    if (validation() === true) {
      alert('Cadastro realizado!');
    }
  }

  //  Validando formulário
  function validation() {
    const c1= nameValidation(name);
    const c2 = telValidation(tel);
    const c3 = emailValidation(email);
    if(c1 === true && c2 === true && c3 === true) {
        return true
    }
    return false
  }
  
  //   Compartilhando nas redes sociais

  function handleShare() {
    // URL que deseja compartilhar
    var textoCompartilhar =
      'Asma, infecções das vias aéreas superiores e incidência de câncer de pulmão e doenças cardiovasculares são apenas alguns dos sintomas que respirar poluição causa ao ser humano. Junte-se a iniciativa capaz de acabar com isso! Una-se a SoftForge para uma qualidade de ar melhor!';
    // Títulos para cada rede social
    let tituloTwitter = 'Compartilhar no Twitter';
    let tituloFacebook = 'Compartilhar no Facebook';
    let tituloReddit = 'Compartilhar no Reddit';
    let tituloWhatsApp = 'Compartilhar no WhatsApp';
    // URLs de compartilhamento para cada rede social
    let urlTwitter =
      'https://twitter.com/share?url=' + encodeURIComponent(textoCompartilhar);
    let urlFacebook =
      'https://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(textoCompartilhar);
    let urlReddit =
      'https://www.reddit.com/submit?url=' +
      encodeURIComponent(textoCompartilhar);
    let urlWhatsApp =
      'https://api.whatsapp.com/send?text=' +
      encodeURIComponent(textoCompartilhar);
    // Largura e altura da janela pop-up
    let larguraJanela = 500;
    let alturaJanela = 400;
    // Calcula a posição central da janela no navegador
    let esquerda = (window.innerWidth - larguraJanela) / 2;
    let topo = (window.innerHeight - alturaJanela) / 2;
    // Abre a janela pop-up com os links de compartilhamento
    let janelaCompartilhamento = window.open(
      '',
      'Compartilhar',
      'width=' +
        larguraJanela +
        ', height=' +
        alturaJanela +
        ', top=' +
        topo +
        ', left=' +
        esquerda
    );
    // Conteúdo HTML para a janela pop-up
    var conteudoPopup = `
    <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    
    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    li {
      margin-bottom: 10px;
    }
    
    a {
      display: block;
      padding: 10px;
      background-color: #f5f5f5;
      color: #333;
      text-decoration: none;
      border-radius: 5px;
    }
    
    a:hover {
      background-color: #ddd;
    }
  </style>
  
  <h1>Compartilhar</h1>
  <ul>
    <li><a href="${urlTwitter}" target="_blank">${tituloTwitter}</a></li>
    <li><a href="${urlFacebook}" target="_blank">${tituloFacebook}</a></li>
    <li><a href="${urlReddit}" target="_blank">${tituloReddit}</a></li>
    <li><a href="${urlWhatsApp}" target="_blank">${tituloWhatsApp}</a></li>
  </ul>
`;
    // Define o conteúdo HTML na janela pop-up
    janelaCompartilhamento.document.body.innerHTML = conteudoPopup;
  }

  return (
    <>
      <main>
        <div>
          <h2 id='title'>Cansado de respirar ar sujo?</h2>
          <p className='initial-text'>
            Asma, infecções das vias aéreas superiores e incidência de câncer de
            pulmão e doenças cardiovasculares são apenas alguns dos sintomas que
            respirar poluição causa ao ser humano.
          </p>
          <p className='initial-text'>
            Junte-se a iniciativa capaz de acabar com isso!
          </p>
          <form name='increva-se'>
            <input
              type='text'
              placeholder='Alexandre Carlos '
              required='required'
              name='name'
              autoComplete='given-name'
              onChange={(e) => setName(e.target.value)}
            />
            <InputMask
              mask='(99)99999-9999'
              maskChar=''
              placeholder='(00)00000-0000'
              onChange={(e) => setTel(e.target.value)}
            />
            <input
              type='text'
              name='email'
              placeholder='name@mail.com'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Deixe suas dúvidas ou comentários'
              name='coment'
            ></textarea>
            <button onClick={handleClick}>Enviar</button>
          </form>
          <button onClick={handleShare} id='btn-compartilhar'>
            Compartilhe nas redes sociais!
          </button>
        </div>
      </main>
    </>
  );
};