import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './time.css';

const Time = ({ id, nome, cor, corPrimaria, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && (
            <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(corPrimaria, '0.6') }}>

                <input 
                    onChange={evento => mudarCor(evento.target.value, id)} 
                    value={cor} 
                    type='color' 
                    className='input-cor' 
                />
                
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => { 
                    return (
                        <Colaborador 
                            key={colaborador.id}
                            id={colaborador.id} 
                            nome={colaborador.nome} 
                            imagem={colaborador.imagem}
                            cargo={colaborador.cargo} 
                            corPrimaria={corPrimaria}
                            aoDeletar={aoDeletar}
                            favorito={colaborador.favorito}
                            aoFavoritar={aoFavoritar}
                        />
                    )})}
                </div>
            </section>
        )
    );
}

export default Time;