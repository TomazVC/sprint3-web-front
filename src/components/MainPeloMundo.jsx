import { useState } from 'react';
import '../style/components/mainPeloMundo.scss';
import exemploTank from '../img/exemplotank.png'
import exemploHomem from '../img/exemplo_homem.webp';
import exemploTank2 from '../img/exemplo2tank.png'
import visaoC from '../img/visao_cima.png'

import {
  emailValidation,
  passwordValidation,
} from '../validations/validations';

export default function MainPeloMundo() {
  return (
    <>
      <main>
        <div id='esquerda'>
          <div>
            <img src={exemploTank} className='img' />
            <h3>Avenida Paulista</h3>
          </div>
          <div>
            <img
              className='img'
              src={exemploHomem}
              alt='pessoas conversando em frente ao módulo'
            />
            <h3>Moema</h3>
          </div>
        </div>
        <div id='direita'>
          <div>
            <img src={exemploTank2} className='img' alt='modulo de lado' />
            <h3>Faria Lima</h3>
          </div>
          <div>
            <img
              src={visaoC}
              className='img'
              alt='mulher lendo sentada no módulo'
            />
            <h3>Tatuapé</h3>
          </div>
        </div>
      </main>
    </>
  );
}
