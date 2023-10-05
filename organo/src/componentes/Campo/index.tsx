import './Campo.css';


interface CampoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    type?: string
}

const Campo = ({ valor, placeholder, label, aoAlterado, type='text', obrigatorio=false }: CampoProps) => {
    

    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
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