import React, { useState, useReducer, useEffect, useContext } from 'react';

import classes from './Login.module.css';

import Button from '../UI/Button/Button';

import AuthContext from '../../context/auth-context';
function usernameReducer(state,action) {
    switch(action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: action.value.trim().length > 5
            };
        default:
            return {
                ...state
            };
    }
}


function passwordDispatcher(state,action) {
    switch(action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: action.value.trim().length > 8
            };
        default:
            return {
                ...state
            };
    }
}

function Login() {

    const [isValid, setIsValid] = useState(false);
    const [username, usernameDispatch] = useReducer(usernameReducer, {
        value: '',
        isValid: false
    });
    const [password, passwordDispatch] = useReducer(passwordDispatcher, {
        value: '',
        isValid: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const ctx = useContext(AuthContext);

    const {isValid:usernameValid} = username;
    const {isValid:passwordValid} = password;



    useEffect(() => {
        setIsValid(
            usernameValid && passwordValid
        );
    }, [usernameValid, passwordValid]);






    function usernameChangedHandler(e) {
        usernameDispatch({type:'INPUT_CHANGE', value:e.target.value});
    };

    function passwordChangedHandler(e) {
        passwordDispatch({type:'INPUT_CHANGE', value:e.target.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
       setIsLoading(true);
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const data = await response.json();
        
       let index = -1;

       const timer = setTimeout(() => {
        
            clearTimeout(timer);
            setIsLoading(false);
            index = data.findIndex((value) => value.username === username.value);
            if(index < 0) {
                setErrors(prevState => {
                     const newError = "User not found";
                     return [...errors, newError];
                });
            } else {
                ctx.login(username.value);
            };
       }, 4000);
     
    };



    return(
        <main className={classes.mainLogin}>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>Nome Utente</label>
                <input type="text" 
                        placeholder="Inserisci il nome utente"
                        autoComplete='off'
                        onChange={usernameChangedHandler}
                        className={`${username.isValid ? classes.validInput : ""}`}

                        />
                <label>Password</label>
                <input type="password"
                        placeholder="Inserisci la tua password"
                        autoComplete='off'
                        onChange={passwordChangedHandler}
                        className={`${password.isValid ? classes.validInput : ""}`}
                        value={password.value}
                />
                <Button content="ACCEDI"
                        template={"loadingButton"}
                        valid={isValid}
                        isLoading={isLoading}
                        
                />
                { errors.length > 0 && errors.map(error => {
                    return <p className={classes.error}>{error}</p>
                })}
            </form>

        </main>
    );
};

export default Login;