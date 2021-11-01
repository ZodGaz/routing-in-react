
import React, {useState} from 'react';

import classes from './Error.module.css';


function Error(props) {
    const [showError, setShowError] = useState(true);
    const timeout = setTimeout(() => {
        setShowError(false);
        clearTimeout(timeout);
    }, 4000);
    
    return (
       {
           showError && <p>{props.error}</p>
       }
    )
};

export default Error;