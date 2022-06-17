import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import './App.css';
import { publicRoutes, privatRoutes } from './router/index.js';
import { isAuthChange } from './store/authStore';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('authUser')){
      dispatch(isAuthChange(true))
    }
  },[])
  const isAuth = useSelector(state=>state.auth.auth)  
  return (
    <div>
      {isAuth
        ? <Router>
          <Routes>
            {privatRoutes.map(route => <Route path={route.path} element={<route.component />} />)}
            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
        </Router>
        :
        <Router>
          <Routes>
            {publicRoutes.map(route => <Route path={route.path} element={<route.component />} />)}
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        </Router>}
    </div>
  );
}

export default App;
