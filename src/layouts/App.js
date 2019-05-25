import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import { BrowserRouter as Route } from 'react-router-dom';

function App() {
  return (
    <Route>
      <div className="app">
        <header className="app__header">
          {<Header />}
        </header>
        <main className="app__main">
          <aside className="app__nav">
            {<Navigation />}
          </aside>
          <section className="app__page">
            {<Page />}
          </section>
        </main>
        <footer className="app__footer">{<Footer />}</footer>
      </div>
    </Route>
  );
}

export default App;
