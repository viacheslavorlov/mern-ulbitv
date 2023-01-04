import React, {useState} from 'react';
import "./registration.css";
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [passwordRepeat, setPasswordRepeat] = useState('');
	return (
		<div className="registration">
			<div className="registration__header">Регистрация</div>
			<Input value={email} setValue={setEmail} type="email" placeholder={"Введите e-mail"}/>
			<Input value={password} setValue={setPassword} type="password" placeholder={"введите пароль"}/>
			{/*<Input type="password" placeholder={"повторите пароль"}/>*/}
			<button onClick={() => registration(email, password)} className="registration__button">Зарегистрироваться</button>
		</div>
	);
};

export default Registration;
