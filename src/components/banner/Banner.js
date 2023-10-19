import './Banner.css'
import { Element } from 'react-scroll';

function Banner() {
  return (
    <div className='alameda'> 
    <div className='text-wrapper'>
        <p className='texto'>Luiz</p>
        <p className='texto2'>Henrique</p>
        <p className='front'>FRONT-END DEVELOPER</p>
        <p className='stack'>WEB DEVELOPER</p>
      </div>
      <div className='image-wrapper'>
        <div className='circle'></div>
        <img className='foto' src='/image/perfil-grande.jpeg' alt='Descrição da imagem' />
      </div>
      <div>
        <img className='pc' src='/image/tela.png' alt='tela'></img>
      </div>

      <Element name="inicio">

      </Element>
    </div>
  );
}

export default Banner;
