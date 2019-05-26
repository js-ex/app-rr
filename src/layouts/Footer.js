import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <Route path="/:page/" render={({ match }) => {
                return <p>Jesteś na stronie: <strong>{match.params.page}</strong></p>
            }} />
            <Route path="/:page/:id" render={({ match }) => {
                console.log(match);
                return <p>Jesteś na podstronie: <strong>{match.params.page}</strong> / <strong>{match.params.id}</strong></p>
            }} />
        </div>
    );
}

export default Footer;