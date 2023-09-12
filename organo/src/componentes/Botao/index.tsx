import React from 'react';
import { ReactElement } from 'react';
import './botao.css';

interface BotaoProps {
    children: ReactElement    
}


const botao = (props: BotaoProps) => {
    return (
        <button className="botao">{props.children}</button>
    )
}

export default botao;