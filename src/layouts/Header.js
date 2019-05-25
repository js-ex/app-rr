import React from 'react';
import { Route } from 'react-router-dom';

import '../styles/Header.css';

import image1 from '../images/image__1.jpg';
import image2 from '../images/image__2.jpg';
import image3 from '../images/image__3.jpg';
import image4 from '../images/image__4.jpg';

const images = [image1, image2, image3, image4];
const index = Math.floor(Math.random() * 3);

const randomImage = images[index];

const Header = () => {
    return (
        <>
            <Route path="/" render={() => (
                <img src={image1} alt="" />
            )} />
            <Route path="/products" render={() => (
                <img src={image2} alt="" />
            )} />
            <Route path="/contact" render={() => (
                <img src={image3} alt="" />
            )} />
            <Route path="/admin" render={() => (
                <img src={image4} alt="" />
            )} />
            {/* <img src={randomImage} alt="" /> */}
        </>

    );
}

export default Header;