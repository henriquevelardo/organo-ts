import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css';
import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interface/IColaborador';


interface ColaboradorProps {
    corDeFundo: string, 
    aoDeletar: React.MouseEventHandler<SVGElement>, 
    colaborador: IColaborador,
    aoFavoritar: React.MouseEventHandler<SVGElement>, 
}

const Colaborador = ({corDeFundo, aoDeletar, colaborador, aoFavoritar}: ColaboradorProps) => {

    function favoritar() {
        if (colaborador.favorito === true){
            setTimeout(diminuirIcone, 0.5)
        }
        aoFavoritar(colaborador.id)
    }    

    const [propsFavoritar, setPropsFavoritar] = useState( {size: 25, onClick: favoritar})

    function aumentarIcone() {
        propsFavoritar.size = 35
        setPropsFavoritar({...propsFavoritar})   
    }

    function diminuirIcone() {
        propsFavoritar.size = 25;
        setPropsFavoritar({...propsFavoritar})
    }


    return (
        <div className="colaborador">
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)} 
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>  
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavoritar} color='#ff0000' className='fav' />
                        : <AiOutlineHeart 
                            {...propsFavoritar} 
                            className='fav' 
                            onMouseOver={aumentarIcone} 
                            onMouseOut={diminuirIcone}
    
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;