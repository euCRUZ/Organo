import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io"
import './Colaborador.css';

const Colaborador = ({ id, imagem, nome, cargo, corPrimaria, aoDeletar, favorito, aoFavoritar }) => {
    
    function favoritar() {
        aoFavoritar(id)
    }
    
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            
            <IoIosCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)}
            />

            <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
                <img src={imagem} alt={nome} />
            </div>
            
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito 
                    ? <IoIosHeart {...propsFavorito} color='#ff0000'/> 
                    : <IoIosHeartEmpty {...propsFavorito} />}
                </div>
            </div>
        </div>
    );
}

export default Colaborador;
