import './index.scss';
import { useState } from 'react';
import {tratarNumber, tratarresNumber} from'../../utils/coversao'



export default function VarEstado(){

    const [contador, setContador] = useState(0);

    const [tituloS2, setTituloS2] = useState('Oie');

    const [tituloS3, setTituloS3] = useState('Escolha um item');

    const [marcouOpcaoS4, setmarcouOpcaoS4] = useState(false);

    const [titutloS5, setTituloS5] = useState('Oie');
    const [descricaoS5, setDescricaoS5] = useState('Oie');

    const[num1,setNum1] = useState(0)
    const[num2,setNum2] = useState(0)
    const[res,setRes] = useState(0)


  
    
    //let contador = 0;

    function aumentar(){
        //;
        if(contador<10){
            setContador(contador + 1)
        }
        
        //alert(contador);
    };

    function aumentar2(){
        //;
        if(contador<10){
            setContador(contador + 2)
        }
        
        //alert(contador);
    };
    function diminuir(){

        if(contador>0){
            setContador(contador - 1)
        }
      
    };

    function diminuir2(){

        if(contador>0){
            setContador(contador - 2)
        }
        
    };

    function soma(){
        let soma = tratarNumber(num1) +  tratarNumber(num2);
 
        setRes(soma)
    };
    
    function subtracao(){
        let subtracao = tratarNumber(num1) -  tratarNumber(num2);
 
        setRes(subtracao)
    };

    function multiplicacao(){
        let multiplicacao = tratarNumber(num1) *  tratarNumber(num2);
 
        setRes(multiplicacao)
    };

    function divisao(){
        let divisao = tratarNumber(num1) / tratarNumber(num2);
 
        setRes(divisao)
    };

    function Elevado(){
        let raiz = tratarNumber(num1) ** tratarNumber(num2);
 
        setRes(raiz)
    };


    
    

 




    return(


    
        <div className='pagina-varestado pagina'>
            <header className="cabecalho">
                <h1>React | Variavel de estado</h1>
            </header>

            <div className='secao calculadora'>
                <h1>Calcladora</h1>
                <div className='entrada'>
                    <input type='text' value = {num1} onChange= {e => setNum1(e.target.value)}/>
                    <input type='text'value = {num2} onChange= {e => setNum2(e.target.value)}/>
                    <div> = </div>
                    <div className='resultado'>{res} </div>
                </div>
                <button onClick={soma}>Somar</button>
                <button onClick={subtracao}>Subtrair</button>
                <button onClick={multiplicacao}>Mutiplicar</button>
                <button onClick={divisao}>Dividir</button>
                <button onClick={Elevado}>Elevado</button>

            </div>


            <div className='secao'>
            <h1>Contador</h1>

            <div className='cont'>
                <button onClick={aumentar2}>++</button>
                <button onClick={aumentar}>+</button>
                {contador}
                <button onClick={diminuir}>-</button>
                <button onClick={diminuir2}>--</button>
            </div>

            </div>


            <div className='secao'>
                <h1>{tituloS2}</h1>

                <input type ='text' value = {tituloS2} onChange={e => setTituloS2(e.target.value)} />
            </div>

            <div className='secao'>
                <h1>{tituloS3}</h1>
                    <select onChange={e => setTituloS3(e.target.value)}>
                    <option>Selecione</option>
                        <option>JavaScript</option>
                        <option>Html</option>
                        <option>React</option>
                    </select>
            </div>

            
            <div className='secao'>
                <h1>Programar é lindezinha? {marcouOpcaoS4 ? 'Sim': 'Não'} </h1>

                <input type ='checkbox' checked={marcouOpcaoS4} onChange={ e => setmarcouOpcaoS4(e.target.value)}/> Programar é lindzinha?
            </div>


            <div className='secao'>
                <h1>{titutloS5}</h1>

                <input type='text' value={descricaoS5} onChange={e => setDescricaoS5(e.target.value)}/>

                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>
            

        </div>
    )
}