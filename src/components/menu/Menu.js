import React, { useState, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

import './Menu.css';

function Menu() {
  const [menuFixo, setMenuFixo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMenuFixo(true);
      } else {
        setMenuFixo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (element, customOffset) => {
    scroller.scrollTo(element, {
      duration: 800,
      offset: customOffset,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className={menuFixo ? 'menu-fixo' : ''}>
      <ul>
        <li>
          <Link to="inicio" onClick={() => handleScrollTo('inicio', -1400)}>INICIO</Link>
        </li>
        <li>
          <Link to="aboutme" onClick={() => handleScrollTo('aboutme', -920)}>PROJETOS</Link>
        </li>
        <li>
          <Link to="skills" onClick={() => handleScrollTo('skills', -1350)}>SKILLS</Link>
        </li>
        <li>
          <Link to="certificados" onClick={() => handleScrollTo('certificados', -900)}>CERTIFICADOS</Link>
        </li>
        <li>
          <Link to="redes-sociais" onClick={() => handleScrollTo('contato')}>Socias Midias</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
