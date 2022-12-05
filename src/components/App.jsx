import { useEffect } from "react";
import { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { refreshUser } from "redux/authorization/authOperatoins";
import { selectIsRefreshing } from "redux/authorization/authSelectors";
import Layout from "./Layout/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../pages/Home/Home'))
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))
const Registration = lazy(() => import('../pages/Registration/Registration'))
const Authorization = lazy(() => import('../pages/Authorization/Authorization'))


export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {dispatch(refreshUser())},[dispatch])
  return (isRefreshing ? ('Fetching user data...') : (<div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<RestrictedRoute component={Authorization} redirectTo='/contacts' />} />
          <Route path="/registration" element={<RestrictedRoute component={Registration} redirectTo='/contacts' />} />
        <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo='/login' />} />
        </Route>
    </Routes> 
    <ToastContainer />
  </div>)
  );
};
