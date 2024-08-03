import './index.scss';

export default function Eventos() {

    return(
        <div className='pagina-eventos pagina'>
        <header className='cabecalho'>
        <h1> React | Eventos </h1>
        </header>

        <section className='secao'>
         <h1> Óla, seja bem vindo</h1>

         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur fugit voluptas cumque, quam repellat architecto sint incidunt labore similique, nulla doloribus rerum natus possimus necessitatibus itaque quos eveniet fuga?</p>

         <input type="text" placeholder='Digite alguma coisa' />

         <select>
            <option> Selecione</option>
            <option> Item A</option>
            <option> Item B</option>
         
         </select>

         <div>
            <input type='checkbox' /> Opção 1
            <input type='checkbox' /> Opção 2
         </div>
         <div>
         <input type='radio' /> Opção 2
         <input type='radio' /> Opção 2

         </div>

        <button> Clique aqui </button>

         </section>
        </div>
 
    )
}