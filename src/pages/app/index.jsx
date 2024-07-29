
import './index.scss';

import { Link } from 'react-router-dom';

export default App;

function App() {
  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>

      <h1 className='titulo1'>Estudos de ReactJS<i className='fa fa-heart'></i></h1>

      </header>

    <section className='secao'>
      <h1>
        Estudando Reactjs
      </h1>

      <li>
<Link to='/contato'>Ir para o contato </Link>
        </li>

    </section>

      <ul>

      </ul>
    </div>
  );
}


