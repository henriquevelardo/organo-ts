import './Time.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Time = ({colaboradores, aoDeletar, mudarCor, time}) => {

    const css = { backgroundColor: hexToRgba(time.cor, '0.6' ), backgroundImage: 'url(/imagens/fundo.png)'}

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type="color" className="input-cor"></input>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.id}
                        corDeFundo = {time.cor}
                        aoDeletar = {aoDeletar}
                        colaborador={colaborador}
                    />)}
                </div>
        </section>
        : ''
        
    )
}


export default Time;