import React, {useState} from 'react';
import "./registration.css";
import Input from "../../utils/input/Input";
import {login} from "../../actions/user";
import {useDispatch} from "react-redux";


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	// const [passwordRepeat, setPasswordRepeat] = useState('');
	return (
		<div className="registration">
			<div className="registration__header">Авторизация</div>
			<Input value={email} setValue={setEmail} type="email" placeholder={"Введите e-mail"}/>
			<Input value={password} setValue={setPassword} type="password" placeholder={"введите пароль"}/>
			{/*<Input type="password" placeholder={"повторите пароль"}/>*/}
			<button onClick={() => dispatch(login(email, password))} className="registration__button">Войти</button>
		</div>
	);
};

export default Login;