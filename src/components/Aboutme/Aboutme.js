import './Aboutme.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Element } from 'react-scroll';





function Aboutme(){

    const settings = {
        dots: true, // Exibe os pontos de navegação
        infinite: true, // Define se o slider é infinito
        speed: 500, // Velocidade da transição entre slides
        slidesToShow: 1, // Quantidade de slides visíveis por vez
        slidesToScroll: 1, // Quantidade de slides para avançar/retroceder
        autoplay: true, // Reproduzir automaticamente
        autoplaySpeed: 1000, // Velocidade do autoplay em milissegundos
      };

    return(
        <div className='tudo'>
            <h1>OLA</h1>
           
            <div className='paragrafo'>
            <div className='linha'>
                </div>
            <p className='part1'>
                Me chamo Luiz Henrique, tenho 23 anos e curso ciencias da computacao. Busco oportunidades e conhecimento,
                sou facinado em conhecer novas coisas e possuo um pensamentos quase o tempo todo fora da caixa.
                Me dou bem com qualquer pessoa.
            </p>

            <p className='part2'>
                Agora me adaptando para desenvolvedor WEB, busco oportunidades para mostrar o que sei
                e mostrar que consigo ser o melhor no ramo. 
            </p>
            </div>

            <h2>
                Confira Alguns Projetos
            </h2>
            <div className='linha2'>
            </div>
                <div className='page'>
                <Slider {...settings} className='slider'>
                    <div>
                        <h4>PROJETO 1</h4>
                        <img className='slides' src="/image/vestidos.png" alt="Slide 1" />
                    </div>
                    <div>
                    <h4>PROJETO 2</h4>
                        <img className='slides' src="/image/marina.png" alt="Slide 2" />
                    </div>
                    <div>
                        <h4>PROJETO 3</h4>
                        <img className='slides' src="/image/pokedex.png" alt="Slide 2" />
                    </div>
       
      </Slider>
            </div>

            <Element name="aboutme">
  
        </Element>
        </div>
    );
}

export default Aboutme;