import './Time.css';
import hexToRgba from 'hex-to-rgba';
import { IColaborador } from '../../compartilhado/interface/IColaborador';
import { ITime } from '../../compartilhado/interface/ITime';
import Colaborador from '../Colaborador';

interface TimeProps {
    time: ITime, 
    colaboradores: IColaborador [],
    aoDeletar: React.MouseEventHandler<SVGElement>,
    aoFavoritar:React.MouseEventHandler<SVGElement>,
    mudarCor: any, 
}

const Time = ({colaboradores, aoDeletar, mudarCor, time, aoFavoritar}: TimeProps) => {

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
                        aoFavoritar={aoFavoritar}
                    />)}
                </div>
        </section>
        : <></>
        
    )
}


export default Time;