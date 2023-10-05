import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/index';
import { CalculationRequest } from '../pages/CalculationRequest/index';
import { CalculationStock } from '../pages/CalculationStock/index';
import { PendingCalculations } from '../pages/PendingCalculations/index';
import { InvoicedCalculations } from '../pages/InvoicedCalculations/index';
import { PeopleRegister } from '../pages/PeopleRegister/index';
import { CalculationsHistoric } from '../pages/CalculationsHistoric/index';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/requisicao-de-calculos' element={<CalculationRequest />}/>
            <Route path='/bolsao-de-calculos' element={<CalculationStock />}/>
            <Route path='/calculos-pendentes' element={<PendingCalculations />}/>
            <Route path='/calculos-faturados' element={<InvoicedCalculations />}/>
            <Route path='/cadastro' element={<PeopleRegister />}/>
            <Route path='/historico-de-calculos' element={<CalculationsHistoric />} />
        </Routes>
    );
}