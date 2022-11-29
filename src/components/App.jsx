import { lazy } from "react";
import {  Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'))
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))
const Registration = lazy(() => import('../pages/Registration/Registration'))
const Authorization = lazy(() => import('../pages/Authorization/Authorization'))


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/registration" element={ <Registration />} />
          <Route path="/contacts" element={ <Contacts/>} />
        </Route>
      </Routes> 
    </div>
  );
};
