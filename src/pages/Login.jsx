import React, {useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import playM from "../img/playM.png";
import MyButton from '../components/Ui/button/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import {isAuthChange} from '../store/authStore';






function Login() {
    const dispatch = useDispatch();
    const isAuth = useSelector(state=>state.auth.auth)
    const accounts = useSelector(state=>state.accounts.users)

    const [currentAcc, setCurrentAcc] = useState(
        {
            inn: "",
            password: "",
        }
    )
   

    let check = false;

    function login(e) {
        e.preventDefault();
        if (!isAuth) {
            accounts.map(element => {
                if (!isAuth) {
                    accounts.map(element => {
                        if (element.inn == currentAcc.inn && element.password == currentAcc.password) { 
                            check = true;
                        }
                    })
                }
            })
            if (check === true) {
                const current = {
                    inn:currentAcc.inn,
                    password:currentAcc.password,
                }
                let authUser = JSON.stringify(current);
                localStorage.setItem('authUser',authUser)
                dispatch(isAuthChange(true)) 
                check = false;
            }
            else {
                alert("логин или пароль неверны");
            }
        }
    }

    return (
        <div>
            <Header currentUser={currentAcc} />
            <main className='logMain'>
                <div className="container">
                    <div className="jumbotron">
                        <h1>Авторизация</h1>
                        <p className='mainTXt'>Добро пожаловать! <br />
                            «ОАО «МФК «АБН» является микрофинансовой компанией, работающая на рынке Кыргызской Республики более 20 лет. Основная миссия и цель АБН — предоставление доступных и удобных кредитов нашим клиентам.</p>
                        <hr className='logHR' />
                        <div className="bottomMain">
                            <form onSubmit={login}>
                                <div className="formGroup">
                                    <div className='inputs'>
                                        <label for="inn">ИНН</label><br />
                                        <input id="inn" type="number" placeholder='ИНН' value={currentAcc.inn}
                                            onChange={e => setCurrentAcc({ ...currentAcc, inn: e.target.value })} />
                                    </div>
                                </div>
                                <div className="formGroup">
                                    <div className='inputs'>
                                        <label for="inn">Пароль</label><br />
                                        <input id="inn" type="password" placeholder='Пароль' value={currentAcc.password} onChange={e => setCurrentAcc({ ...currentAcc, password: e.target.value })} />
                                    </div>
                                </div>
                                <a href="#">Забыли пароль? Восстановить</a>
                                <br />
                                <MyButton style={{ marginTop: "1.2rem" }}>Войти</MyButton>
                                <br />
                                <a href="#">Зарегистрироваться</a>
                            </form>
                            <div className="contacts">
                                <aside>
                                    <div className="cards">
                                        <h5>Телефон:</h5>
                                        <a href="#">+996 (312) 51 11 51</a>
                                    </div>
                                    <div className="cards">
                                        <h5> Email:</h5>
                                        <a href="mailto:info@abn.kg"
                                            target="_blank"
                                            rel="noopener noreferrer">info@abn.kg</a>
                                    </div>
                                    <div className="cards">
                                        <h5>Установите приложение:</h5>
                                        <a href="#">
                                            <img src={playM} alt="Play Market" />
                                        </a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Login