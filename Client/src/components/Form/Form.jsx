import React, { useState } from "react";
import validation from './validation';
import Styles from './Form.module.css';

const Form = ({ login }) => {

    let [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    let handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        );
    }

    let handleSubmit = () => {
        login(userData);
    }

    return (
        <div className={Styles.contenedor}>
            <form className={Styles.form}>
                <div className="inputConteiner">
                <label htmlFor="email" className={Styles.label}>Email</label>
                <input
                    type="text"
                    placeholder="Dirección de E-mail"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    className={`${Styles.input} ${errors.username && Styles.myError}`}
                />

                <label htmlFor="password" className={Styles.label}>Password</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    className={`${Styles.input} ${errors.password && Styles.myError}`}
                />
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    alert('BIENVENIDOS!!')
                }}>Register</button>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
