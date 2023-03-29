import './listasuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value ={props.valor} onChange={event => props.aoAlterado(event.target.value)} required={props.obrigatorio}>
                <option value="" placeholder='Escolha o time...'></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;