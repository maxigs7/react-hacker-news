import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

export const routes: RouteProps[] = [
  {
    component: lazy(() => import(/* webpackChunkName: 'welcome.page' */ '../pages/NotFound')),
    path: '/404',
  },
  {
    component: lazy(() => import(/* webpackChunkName: 'welcome.page' */ '../pages/Welcome')),
    path: '/welcome',
  },
  {
    component: lazy(() => import(/* webpackChunkName: 'item.page' */ '../pages/Item')),
    path: '/item/:id',
  },
  {
    component: lazy(() => import(/* webpackChunkName: 'main.page' */ '../pages/Stories')),
    path: '/stories/:slug',
  },
];
