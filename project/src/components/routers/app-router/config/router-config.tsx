import {RouteObject} from 'react-router-dom';
import PrivateRoute from '../../private-router/private-router';
import { SignInPage } from '../../../../pages/sign-in-page';
import { FilmPage } from '../../../../pages/film-page';
import { PlayerPage } from '../../../../pages/player-page';
import { AddReviewPage } from '../../../../pages/add-review-page';
import { MyListPage } from '../../../../pages/my-list-page';
import { NotFoundPage } from '../../../../pages/not-found-page';
import {MainPage} from '../../../../pages/main-page';

export enum AppRoute {
  MAIN = 'main',
  FILM = 'film',
  MY_LIST = 'my_list',
  PLAYER = 'player',
  SIGN_IN = 'sign_in',
  ADD_REVIEW = 'add_review',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.FILM]: '/films/:id',
  [AppRoute.MY_LIST]: '/mylist',
  [AppRoute.PLAYER]: '/player/:id',
  [AppRoute.SIGN_IN]: '/login',
  [AppRoute.ADD_REVIEW]: '/films/:id/review',
  [AppRoute.NOT_FOUND]: '*',
} as const;

export type AppRouteKey = keyof typeof RoutePath;

export const routes: RouteObject[] = [
  {
    index: true,
    element: < MainPage />
  },
  {
    path: RoutePath.film,
    element: < FilmPage />
  },
  {
    path: RoutePath.my_list,
    element:
      <PrivateRoute >
        < MyListPage />
      </PrivateRoute>
  },
  {
    path: RoutePath.player,
    element: < PlayerPage />
  },
  {
    path: RoutePath.sign_in,
    element: < SignInPage />
  },
  {
    path: RoutePath.add_review,
    element:
      <PrivateRoute >
        < AddReviewPage />
      </PrivateRoute>
  },
  {
    path: RoutePath.not_found,
    element: < NotFoundPage />
  }
];
