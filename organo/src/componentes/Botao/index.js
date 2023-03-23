import './botao.css';


const botao = (props) => {
    return (
        <button className="botao">{props.children}</button>
    )
}

export default botao;