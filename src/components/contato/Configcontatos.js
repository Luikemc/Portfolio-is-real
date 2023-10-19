import Contato from './Contato';
import '../contato/Configcontatos.css';

function Configcontatos(props){
    const portifolio = [

        {
          nomeTec: 'INSTAGRAM',
          imagemTec: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png',
          url: 'https://www.instagram.com/luiz_henriq3_3/'
        },
    
        
        {
          nomeTec: 'GMAIL',
          imagemTec: 'https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg',
          url: 'luikemc@gmail.com'
        },
    
        {
          nomeTec: 'WHATSAP',
          imagemTec: 'https://logopng.com.br/logos/whatsapp-33.png',
          url: 'https://api.whatsapp.com/send?phone=5562995231846&text=Ol%C3%A1,%20acabei%20de%20ver%20seu%20portfolio%20e%20estou%20interessado%20em%20fazer%20um%20trabalho%20com%20voc%C3%AA.%20'
        },
    
        {
          nomeTec: 'LINKEDIN',
          imagemTec: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png',
          url: 'https://www.linkedin.com/in/luiz-henrique-martins-chaves-3068b815a/'
        },
    
    
    ]
    
    const css = {backgroundColor:props.corSecundaria}
        return(
            <section className='projetoss' style={css} >
                <h3 style={{borderColor: props.corPrimaria}}>{props.nomecontato}</h3>
                
                <p className='info'>Ola, gostou do meu portifolio? Vou melhorar muuito mais ele ainda.
                se gostou, pode entrar em contato atraves de alguma das redes sociais citadas abaixo, ou me acompanhar. Trabalho com freelance e estou disponivel para 
                entrar na sua empresa se voce precisar. Vamos la, vamos fazer sua empresa ganhar um site agora, e ficar com muita mais credibilidade. </p>
                <div className='projetinhos'>
                    {portifolio.map(porta =><Contato key={porta.nomeTec}
                    nomeTec={porta.nomeTec}
                    imagemTec={porta.imagemTec}
                    url={porta.url}/>)}
                </div>
            </section>
        )

}

export default Configcontatos;