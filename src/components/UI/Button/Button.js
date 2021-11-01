
import React, {useState} from 'react';

import classes from './Button.module.css';

const Button = (props) => {

    return(
        <button 
            disabled={!props.valid}
          
            className={`${classes[props.template]}
                    ${props.isLoading ? classes.isLoading : ""}
            `}>
            {props.content}
        </button>
    );
};

export default Button;