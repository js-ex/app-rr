import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageProducts from '../pages/PageProducts';
import PageContact from '../pages/PageContact';
import PageAdmin from '../pages/PageAdmin';
import PageError from '../pages/PageError';

const Page = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={PageHome} />
                <Route path="/products" exact component={PageProducts} />
                <Route path="/contact" exact component={PageContact} />
                <Route path="/admin" exact component={PageAdmin} />
                <Route component={PageError} />
            </Switch>
        </div>
    );
}

export default Page;