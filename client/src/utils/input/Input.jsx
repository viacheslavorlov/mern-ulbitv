import React from 'react';
import "./input.css";

const Input = ({type, placeholder, value, setValue}) => {
	return (
		<input
			value={value}
			onChange={event => setValue(event.target.value)}
			type={type}
			placeholder={placeholder}/>
	);
};

export default Input;
