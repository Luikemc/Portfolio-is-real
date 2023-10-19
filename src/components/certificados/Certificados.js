import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Element } from 'react-scroll';
import './Certificados.css';


function Certificados(){

    const settings = {
        dots: true, // Exibe os pontos de navegação
        infinite: true, // Define se o slider é infinito
        speed: 500, // Velocidade da transição entre slides
        slidesToShow: 1, // Quantidade de slides visíveis por vez
        slidesToScroll: 1, // Quantidade de slides para avançar/retroceder
        autoplay: true, // Reproduzir automaticamente
        autoplaySpeed: 2000, // Velocidade do autoplay em milissegundos
      };
    return(
        <div className='pages'>
            <h1 className='certificados'>CERTIFICADOS</h1>
            <div className='subrinhado'></div>
        <Slider {...settings} className='slider'>
            <div>
                <h4>Introducao de Criacao de WEB SITES HTML E CSS</h4>
                <img className='slides' src="/image/certificado1.png" alt="certificado1" />
            </div>
            <div>
            <h4>Desafio de Projetos : Crie um Portfolio Vencedor</h4>
                <img className='slides' src="/image/certificado2.png" alt="certificado2" />
            </div>
            <div>
                <h4>Versionamento de Codigo com GIT e GITHUB</h4>
                <img className='slides' src="/image/certificado3.png" alt="certificado3" />
            </div>
            <div>
                <h4>Organizando seus Estudos Com Notion</h4>
                <img className='slides' src="/image/certificado4.png" alt="certificado4" />
            </div>
            <div>
                <h4>Bootcamp DIO</h4>
                <img className='slides' src="/image/certificado5.png" alt="certificado5" />
            </div>

            </Slider>

            <Element name="certificados">
  
        </Element>
        </div>
    );
}

export default Certificados;