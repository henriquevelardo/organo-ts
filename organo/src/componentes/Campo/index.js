import './Campo.css';

const Campo = ({valor, obrigatorio, placeholder, label, aoAlterado, type='text'}) => {
    
    const aoDigitado = (event) => {
        aoAlterado(event.target.value)
    }

    return (
    <div className={`campo campo-${type}`}>
        <label>
            {label}
        </label>
        <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}/>
    </div>
    )
}

export default Campo;