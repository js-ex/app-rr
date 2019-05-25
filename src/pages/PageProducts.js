import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageProducts.css';

const products = ["Monitor", "XboxOneX", "PcPro"];

const PageProducts = () => {

    const productsList = products.map(p => (
        <li key={p}>
            <Link to={`/product/${p}`}>{p}</Link>
        </li>
    ))

    return (
        <div className="app__products">
            <h1>Lista produktów</h1>
            {productsList ? <ul>{productsList}</ul> : null}
        </div>
    );
}

export default PageProducts;