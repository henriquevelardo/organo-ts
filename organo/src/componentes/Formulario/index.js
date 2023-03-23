import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './formulario.css'
import { useState } from 'react';

const Formulario = (props) => {

    const times = [
        'Programação', 
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design', 
        'Mobile', 
        'Inovação e gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault();

        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time, 
        }
)
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor = {cargo}
                    aoAlterado = {cargo => setCargo(cargo)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado = {imagem => setImagem(imagem)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={times} 
                    label="Time"
                    valor ={time}
                    aoAlterado = {time => setTime(time)}
                />
                <Botao >
                    Cria Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;