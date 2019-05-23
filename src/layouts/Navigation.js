import React from 'react';
import '../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

const list = [
    { name: "Home", path: "/", exact: true },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contact" },
    { name: "Admin", path: "/admin" },
]

const menu = list.map(item => (
    <li key={item.name}>
        <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
))

const Navigation = () => {
    return (
        <nav>
            {menu ? <ul>{menu}</ul> : null}
        </nav>
    );
}

export default Navigation;