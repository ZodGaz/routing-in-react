import React from 'react';

import classes from './Container.module.css';

function Container(props) {
    return (
        <main className={classes.container}>
            {props.children}
        </main>
    )
};

export default Container;