

import Contato from './pages/contato';
import App from './pages/app';
import NaoEncontrado from './pages/notFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />


                <Route path='*'element={<NaoEncontrado/>}/>
            </Routes>
        </BrowserRouter>
    )
}