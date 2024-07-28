
import './index.css';

import { Link } from 'react-router-dom';

export default App;

function App() {
  return (
    <div className="App">
      <h1>Estudos de ReactJS</h1>
      <br/>
      <i className='fa fa-heart'></i>
      <h1>Salve</h1>
      <ul>
        <li>
<Link to='/contato'>Ir para o contato </Link>
        </li>
      </ul>
    </div>
  );
}


