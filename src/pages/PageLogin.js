import React from 'react';
import '../styles/PageLogin.css';

const PageLogin = () => {

    return (
        <div>
            <h1>Zaloguj się do systemu</h1>
            <form className="app__form-login">
                <label htmlFor="app__form__login">
                    <input id="app__form__login" type="text" placeholder="Login" />
                </label>
                <div></div>
                <label htmlFor="app__form__pass">
                    <input id="app__form__pass" type="password" placeholder="Hasło" />
                </label>
                <hr />
                <button>
                    Zaloguj się
                </button>
            </form>
        </div>
    );

}

export default PageLogin;