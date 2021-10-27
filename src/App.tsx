import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Navbar } from './components';
import { Suspense } from 'react';
import React from 'react';

export const LazyWelcome = React.lazy(() => import(/* webpackChunkName: 'welcome' */ './pages/Welcome'));
export const LazyItems = React.lazy(() => import(/* webpackChunkName: 'items' */ './pages/Items'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Suspense fallback="Loading...">
          <Switch>
            <Route component={LazyItems} path="/:slug" />
            <Route component={LazyWelcome} path="/" exact={true} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
