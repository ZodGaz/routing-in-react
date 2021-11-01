import React from 'react';

import classes from './Main.module.css';
//Container
import Container from '../../Container/Container';

import Post from './Post/Post';

function Main() {
    return (
        <Container>
            <section className={classes.main}>
                <Post />
                <Post />
            </section>
        </Container>
        
    )

};

export default Main;