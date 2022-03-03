import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login/Login';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;

/*
import React from 'react';
import { Route, Routes as Switch } from "react-router-dom";
import Complete from '../pages/Complete.js';
import Consent from '../pages/Consent.js';
import NewPassword from '../pages/NewPassword.js';
import NewPasswordConfirm from '../pages/NewPasswordConfirm.js';
import Password from '../pages/Password.js';
import ResetPassword from '../pages/ResetPassword.js';
import ResetPasswordConfirm from '../pages/ResetPasswordConfirm.js';
import SmsCerti from '../pages/SmsCerti.js';

const Container = () => {
    
    return (
        <div>
            <Switch>            
                <Route path={'/Complete'} element={<Complete />} />
                <Route path={'/Consent'} element={<Consent />} />
                <Route path={'/NewPassword'} element={<NewPassword />} />
                <Route path={'/NewPasswordConfirm'} element={<NewPasswordConfirm />} />
                <Route path={'/Password'} element={<Password />} />
                <Route path={'/ResetPassword'} element={<ResetPassword />} />
                <Route path={'/ResetPasswordConfirm'} element={<ResetPasswordConfirm />} />
                <Route path={'/SmsCerti'} element={<SmsCerti />} />
                <Route path={'/'} element={<SmsCerti />} />
            </Switch>

        </div>
    );
};

export default Container;
*/