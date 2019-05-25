import React from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/PageContact.css';

class PageContact extends React.Component {

    state = {
        value: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            value: ""
        });

    }

    handleChange = (e) => {

        this.setState({
            value: e.target.value
        });

    }

    render() {

        return (
            <div>
                <h1>Skontaktuj się z nami</h1>
                <form className="app__form" onSubmit={this.handleSubmit}>
                    <label htmlFor="app__form" aria-label="Treść wiadomości">
                        <textarea className="app__form-text" id="form__form" placeholder="Treść wiadomości" onChange={this.handleChange} value={this.state.value}></textarea>
                    </label>
                    <button className="app__form-btn">Wyślij formularz</button>
                </form>
                <Prompt when={this.state.value} message="Na pewno chesz opuścić stronę z wypełnionym formularzem?" />
            </div >
        );

    }

}

export default PageContact;