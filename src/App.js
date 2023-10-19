import Aboutme from "./components/Aboutme/Aboutme";
import Configskill from "./components/ConfigSkills/ConfigSkill";
import Banner from "./components/banner/Banner";
import Certificados from "./components/certificados/Certificados";
import Configcontatos from "./components/contato/Configcontatos";
import Menu from "./components/menu/Menu";


const skills = [
  {
    nome: 'HARD SKILLS',
    corPrimaria: '#FBC508',
    corSecundaria: '#FFFF',
  }
]

const contato = [
  {
    nomecontato: 'CONTATOS',
    corPrimaria: '#FBC508',
    corSecundaria: '#FFFF',
  }
]



function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Aboutme/>
      {skills.map(skill => <Configskill key={skill.nome} 
        nome={skill.nome} 
        corPrimaria={skill.corPrimaria} 
        corSecundaria={skill.corSecundaria}
     />)}
     <Certificados/>
    
     {contato.map(contatos => <Configcontatos key={contatos.nomecontato} 
        nomecontato={contatos.nomecontato} 
        corPrimaria={contatos.corPrimaria} 
        corSecundaria={contatos.corSecundaria}
     />)}
    </div>
  );
}

export default App;
