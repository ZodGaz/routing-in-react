import React, { useEffect, useState} from 'react';

const AuthContext = React.createContext({
    username:'',
    isLoggedIn:false,
    login: () => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1') {
            setUsername(localStorage.getItem('username'));
            setIsLoggedIn(true);
        };

        setInterval(() => {
            if(!localStorage.getItem('isLoggedIn')){
                logout();
            }
        }, 2000);
    }, []);

   function login(username) {
        setUsername(username);
        setIsLoggedIn(true);
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', '1');
        const timer = setTimeout(() => {
            logout();
            clearTimeout(timer);
        }, 600000);
    };

   function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');    
    setIsLoggedIn(false);
   };

    return(
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            username:username,
            login:login,
            logout:logout,
        }}>
            { props.children }
        </AuthContext.Provider>
    )
};


export default AuthContext;