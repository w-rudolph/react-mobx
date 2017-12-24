import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { spy } from 'mobx';
import { Provider } from 'mobx-react';

import homeStore from './models/home';
import aboutStore from './models/about';
import topicStore from './models/topics';

import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';

// import DevTools from 'mobx-react-devtools';

const store = {
    home: homeStore,
    about: aboutStore,
    topic: topicStore
};

spy((event) => {
    if (event.type === 'action') {
        console.log(`%c[action]: ${event.name}`, 'color:#3e90fb')
    }
});

const App = () => {
    return (
        <HashRouter>
            <div>
                <ul>
                    <li><NavLink exact to="/home" replace>首页</NavLink></li>
                    <li><NavLink to="/about" replace>关于</NavLink></li>
                    <li><NavLink to="/topics" replace>主题列表</NavLink></li>
                </ul>
                {/* <DevTools /> */}
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                    <Redirect to="/home" />
                </Switch>
            </div>
        </HashRouter>
    );
};

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);