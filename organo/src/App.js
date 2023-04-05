import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
  }

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    }
  ])

  const inicial = [
    { 
      id:uuidv4(),
      nome: 'HENRIQUE VELARDO',
      cargo: 'Desenvolvedor Front-End Jr.',
      imagem: 'https://github.com/henriquevelardo.png',
      time: times[1].nome
    },
    { 
      id:uuidv4(),
      nome: 'HENRIQUE VELARDO',
      cargo: 'Desenvolvedor Front-End Jr.',
      imagem: 'https://github.com/henriquevelardo.png',
      time: times[1].nome
    },
    { 
      id:uuidv4(),
      nome: 'HENRIQUE VELARDO',
      cargo: 'Desenvolvedor Front-End Jr.',
      imagem: 'https://github.com/henriquevelardo.png',
      time: times[1].nome
    },
    { 
      id: uuidv4(),
      nome: 'HENRIQUE VELARDO',
      cargo: 'Desenvolvedor Front-End Jr.',
      imagem: 'https://github.com/henriquevelardo.png',
      time: times[2].nome
    },
    { 
      id: uuidv4(),
      nome: 'HENRIQUE VELARDO',
      cargo: 'Desenvolvedor Front-End Jr.',
      imagem: 'https://github.com/henriquevelardo.png',
      time: times[2].nome
    },
    { 
      id: uuidv4(),
      nome: 'HENRIQUE VELARDO',
      cargo: 'Desenvolvedor Front-End Jr.',
      imagem: 'https://github.com/henriquevelardo.png',
      time: times[2].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

function deletarColaborador(id){
  setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
}

function mudarCorDoTime(cor, id){
  setTimes(times.map(time => {
    if(time.id === id){
      time.cor = cor;
    }
    return time;
  }))
}

function cadastrarTime(novoTime) {
  console.log(novoTime)
  setTimes([...times, {...novoTime, id: uuidv4()} ])
}

  return (
    <div className="App">
      <Banner />
      <Formulario  
        time={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
        cadastrarTime = {cadastrarTime}
      />
      {times.map((time, index) => 
        <Time 
          key={index} 
          time={time} 
          colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
