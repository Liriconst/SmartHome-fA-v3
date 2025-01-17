import * as React from 'react';
import {Router, Switch, Route, Link} from "react-router-dom";
import Countdown from "react-countdown-now";
import styles from './App.module.scss';
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Heating from "./components/heating/Heating";

import { createBrowserHistory } from 'history';

export const appHistory =  createBrowserHistory();

const App: React.FC = () => {
    return (
        <Router history={appHistory}>
            <div className={styles.page}>
                <div>
                    {/* <div><Link to="/">Home</Link></div>*/}
                    {/*<div><Link to="/menu">Menu</Link></div>*/}
                    {/*<div>*/}
                    {/*    <Link to="/heating">Heating</Link>*/}
                    {/*</div>*/}
                </div>

                <Switch>
                    <Route path="/menu">
                        <Menu/>
                    </Route>
                    <Route path="/heating">
                        <Heating/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
