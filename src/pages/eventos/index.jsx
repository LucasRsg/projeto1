import './index.scss';

import { Link } from 'react-router-dom';
export default function Eventos() {


    function clicou(){
        alert('Oie, usuario acaba de clicar');
}
function movimetntoMouse(){
    alert('Oie, usuario acaba de movimentar o mouse');
}
function alterouValor(e){
    let novoValor = e.target.value;
    alert('Oie, usuario acaba de alterar o valor do input para : ' + novoValor);
}
function alterouCheck(e){
    let alteroucheck1 = e.target.checked;
    alert('Oie, usuario acaba de alterar o valor do check/radio para : ' + alteroucheck1);
}

    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1> React | Eventos </h1>
            </header>

            <section className='secao'>
                <h1> Óla, seja bem vindo</h1>

                <p onClick={clicou} onMouseMove={movimetntoMouse}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur fugit voluptas cumque, quam repellat architecto sint incidunt labore similique, nulla doloribus rerum natus possimus necessitatibus itaque quos eveniet fuga?</p>

                <input onChange={alterouValor}type="text" placeholder='Digite alguma coisa' />

                <textarea onChange={alterouValor} placeholder='   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea quam eum praesentium quis ipsa tenetur, excepturi deserunt iste cupiditate facere asperiores officia recusandae adipisci doloremque iusto repellat, obcaecati voluptates!'>
                 
                </textarea>

                <select>
                    <option> Selecione</option>
                    <option> Item A</option>
                    <option> Item B</option>

                </select>

                <div className='grupo'>
                    <input type='checkbox' onChange={alterouCheck}/> Opção 1
                    <input type='checkbox' /> Opção 2
                </div>
                <div className='grupo' onChange={alterouCheck}>

                    <input type='radio' name='gpo'  /> Opção 1

                    <input type='radio' name='gpo' /> Opção 2

                </div>

                <button onClick={clicou}> Clique aqui </button>

            </section>
        </div>

    )
}