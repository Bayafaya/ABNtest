import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {isAuthChange} from '../store/authStore'
function Header() {
    const dispatch = useDispatch();
    let isAuth = useSelector(state=>state.auth.auth)
    let userInn = {};
    if(localStorage.getItem('authUser')){
        dispatch(isAuthChange(true))
        userInn = JSON.parse(localStorage.getItem('authUser'));
    }
   
    function logout() {
        dispatch(isAuthChange(false))
        localStorage.removeItem('authUser')
    }
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="leftSideNav">
                        <div className="logo">
                            <a href="#">LOGO</a>
                        </div>
                        <div className="menu">
                            <a href="#">Главная</a>
                            <a href="#">Кредиты</a>
                            <a href="#">Контакты</a>
                            <a href="#">Об АБН</a>
                        </div>
                    </div>
                    {isAuth
                        ? <div className="rightSideNav">
                            <div className="verification">
                                <a href="#"  className="currentUser">{userInn.inn}</a>
                                <a href="#" onClick={logout}>Выйти</a>
                            </div>
                        </div>
                        : 
                        <div className="rightSideNav">
                        <div className="verification">
                            <a href="#">Регистрация</a>
                            <a href="#">Войти</a>
                        </div>
                    </div>
                    }

                </div>
            </nav>
        </header>
    )
} 

export default Header;