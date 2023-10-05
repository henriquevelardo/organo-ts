import { ReactElement } from 'react';
import './botao.css';

interface BotaoProps {
    children: ReactElement | string
}


const botao = (props: BotaoProps) => {
    return (
        <button className="botao">{props.children}</button>
    )
}

export default botao;