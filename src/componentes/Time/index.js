import Colaborador from '../Colaborador'
import './time.css'

const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, index) => 
                <Colaborador 
                    key={index} 
                    corPrimaria={corPrimaria}
                    nome={colaborador.nome} 
                    imagem={colaborador.imagem}
                    cargo={colaborador.cargo} 
                />)}
            </div>
        </section>
    )
}

export default Time