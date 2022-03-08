import React from 'react';
import { Route, Routes } from "react-router-dom";
import ButtonExample from '../components/button/example/ButtonExample';
import CardExample from '../components/card/example/CardExample';
import InputExample from '../components/input/example/InputExample';
import TableExample from '../components/table/example/TableExample';
import ExcelJsonTransFormation from './ExcelJsonTransFormation';
import Login from './login/Login';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login />} />
                <Route path={'/excel'} element={<ExcelJsonTransFormation />} />
                <Route path={'/button'} element={<ButtonExample />} />
                <Route path={'/table'} element={<TableExample />} />
                <Route path={'/input'} element={<InputExample />} />
                <Route path={'/card'} element={<CardExample />} />
            </Routes>
        </div>
    );
};

export default Router;
