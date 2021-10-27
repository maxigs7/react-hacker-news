import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navbar } from './components';
import './App.css';

export const LazyWelcome = React.lazy(() => import(/* webpackChunkName: 'welcome' */ './pages/Welcome'));
export const LazyItems = React.lazy(() => import(/* webpackChunkName: 'items' */ './pages/Items'));
export const LazyItem = React.lazy(() => import(/* webpackChunkName: 'item' */ './pages/Item'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Suspense fallback="Loading...">
          <Switch>
            <Route component={LazyItem} path="/item/:id" />
            <Route component={LazyItems} path="/:slug" />
            <Route component={LazyWelcome} path="/" exact={true} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
