import Contacts from "pages/Contacts/Contacts";
import Home from "pages/Home/Home";
import {  Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<div>Log in</div>} />
          <Route path="/registration" element={ <div>Log up</div>} />
          <Route path="/contacts" element={ <Contacts/>} />
        </Route>
      </Routes> 
    </div>
  );
};
