import './Skills.css';
import React from 'react';
import { Element } from 'react-scroll';
import ProgressBar from './ProgressBar'; // Certifique-se de importar o ProgressBar

function Skills(props) {
  return (
    <div className='geral'>
      <div className='cabecalho'>
        <img src={props.imagemTec} alt='Vestido Revellion' className='image' />
      </div>
      <div className='rodape'>
        <h4>{props.nomeTec}</h4>
        <div className='middle'>
          <h5>{props.xp}% DE XP</h5>
          <ProgressBar percent={props.xp} />
        </div>
      </div>
      <Element name="skills">
      </Element>
    </div>
  );
}

export default Skills;

