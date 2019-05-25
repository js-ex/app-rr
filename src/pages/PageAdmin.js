import React from 'react';
import { Redirect } from 'react-router-dom';

const permission = false;

const PageAdmin = () => {

    return (
        <div>
            {permission ? <h1>Witaj w panelu administracyjnym</h1> : <Redirect to="/login" />}
        </div>
    );

}

export default PageAdmin;