import Botao from '../Botao'
import './Centro.css'

const Centro = ({ toggleForm, formularioVisivel }) => {
  return (
    <div className='centro'>
        <div className='botao-form'>
          <Botao onClick={toggleForm}>
            {formularioVisivel ? 'Ocultar' : 'Mostrar'} formulário
          </Botao>
        </div>
        <h2>Meus Times</h2>
      </div>
  )
}

export default Centro