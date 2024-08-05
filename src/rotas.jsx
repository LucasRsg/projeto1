

import Contato from './pages/contato';
import App from './pages/app';
import NaoEncontrado from './pages/notFound';
import Eventos from './pages/eventos';
import Varestado from './pages/varestado';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos/>} />
                <Route path='/varestado' element={<Varestado/>} />


                <Route path='*'element={<NaoEncontrado/>}/>
            </Routes>
        </BrowserRouter>
    )
}