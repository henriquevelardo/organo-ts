import React from 'react';
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './formulario.css'
import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interface/IColaborador';
import { ITime } from '../../compartilhado/interface/ITime';

interface FormularioProps{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    cadastrarTime: (time: ITime) => void
    times: string[]
}

const Formulario = (props: FormularioProps) => {


    const aoSalvar = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')


    

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={nome => setNome(nome)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={cargo => setCargo(cargo)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={props.times}
                    label="Time"
                    valor={time}
                    aoAlterado={time => setTime(time)}
                />
                <Botao>
                    Cria Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();

                props.cadastrarTime({ nome: nomeTime, cor: corTime })

                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time:"
                    valor={nomeTime}
                    aoAlterado={nomeTime => setNomeTime(nomeTime)}
                />
                <Campo
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time:"
                    valor={corTime}
                    aoAlterado={corTime => setCorTime(corTime)}
                    type='color'
                />
                <Botao >
                    Cria Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;