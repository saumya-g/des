import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './App';
import Logo from './logo';
import Test from './Test';

import AnimationScroll from './animationScroll';


render((
    <Router history={hashHistory}>
    <Route path='/animationScroll' component={AnimationScroll} />
    <Route path='/Test' component={Test} />
</Router>), document.getElementById('root'));