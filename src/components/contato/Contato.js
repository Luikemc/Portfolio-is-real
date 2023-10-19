import './Contato.css';
import { Element } from 'react-scroll';

function Contato(props){

    /*return(
        <div className='container'>
            
            <div className='contatos'>
               
            </div>
        </div>
    );*/


    return(
        <div className='descobrindo'>
        <div className='cabeca'>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.imagemTec} alt='Vestido Revellion' className='image'/>
        </a>
        </div>
        <div className='pe'>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
             <h4>
                {props.nomeTec}
            </h4>
            </a>
        </div>
        <Element name="contato"></Element>
    
    </div>
    );
}

export default Contato;