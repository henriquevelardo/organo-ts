import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './formulario.css'
import { useState } from 'react';

const Formulario = (props) => {


    const aoSalvar = (event) => {
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

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={nome => setNome(nome)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={cargo => setCargo(cargo)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={props.time}
                    label="Time"
                    valor={time}
                    aoAlterado={time => setTime(time)}
                />
                <Botao >
                    Cria Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;