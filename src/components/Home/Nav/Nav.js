import React, {useContext} from 'react';

import classes from './Nav.module.css';
import AuthContext from '../../../context/auth-context';



function Nav() {
    const { username, logout } = useContext(AuthContext);
    const onLogout = () => {
        logout();
    };

    return(
        <nav className={classes.navbar}>
            <ul>
                <li>{username}</li>
                <li onClick={onLogout}>LOGOUT</li>
            </ul>
        </nav>    
    );
};

export default Nav;