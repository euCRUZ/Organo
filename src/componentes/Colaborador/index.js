import './Colaborador.css'

const Colaborador = ({ imagem, nome, cargo, corPrimaria }) => {
  return (
    <div className='colaborador'>

      <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>

    </div>
  )
}

export default Colaborador