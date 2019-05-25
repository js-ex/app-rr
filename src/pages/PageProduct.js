import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const PageProduct = ({ match }) => {

    return (
        <div>
            Karta produktu
            <Product id={match.params.id} />
            <Link to="/products">Powrót do listy produktów</Link>
        </div>
    );
}

export default PageProduct;