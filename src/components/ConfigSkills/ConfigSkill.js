
import Skills from '../Skills/Skills'
import './ConfigSkill.css';

function Configskill (props){

  const portifolio = [

    {
      nomeTec: 'HTML',
      imagemTec: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
      xp: 90,
    },
    {
      nomeTec: 'CSS',
      imagemTec: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
      xp: 90,
    },
    {
      nomeTec: 'JS',
      imagemTec: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png',
      xp: 80,
    },

    {
      nomeTec: 'REACT',
      imagemTec: 'https://diegomariano.com/wp-content/uploads/2021/06/react-logo.png',
      xp: 85,
    },

    {
        nomeTec: 'WORDPRESS',
        imagemTec: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/800px-WordPress_blue_logo.svg.png',
        xp: 100,
      },

      {
        nomeTec: 'BUILDERALL',
        imagemTec: 'https://yt3.googleusercontent.com/Ftn-6m_wWYehOodhhiEzqjAZjkMqY6JyJJut0Exe42DbWGKtQv3KBW3r3wAtyJbQlmyOsrXplA=s900-c-k-c0x00ffffff-no-rj',
        xp: 100,
      },

      {
        nomeTec: 'GIT',
        imagemTec: 'https://pachecoandre.com.br/assets/imgs/posts/git.png',
        xp: 75,
      },

      {
        nomeTec: 'GITHUB',
        imagemTec: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU',
        xp: 85,
      },

      {
        nomeTec: 'PYTHON',
        imagemTec: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        xp: 70,
      },
    
      {
        nomeTec: 'BOOTSTRAP',
        imagemTec: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png',
        xp: 50,
      },

      {
        nomeTec: 'ANGULAR',
        imagemTec: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        xp: 65,
      },

  
      


      
]

        const css = {backgroundColor:props.corSecundaria}
    return(
        <section className='projetos' style={css}>
            
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='projetinhos'>
           
                {portifolio.map(port =><Skills key={port.nomeTec}
                nomeTec={port.nomeTec}
                imagemTec={port.imagemTec}
                xp={port.xp}
                url={port.url}

      />)}

            </div>
        </section>
    )
                }
export default Configskill;