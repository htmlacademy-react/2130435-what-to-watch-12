import React, {useEffect, useState} from 'react';
import {generatePath, Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import {Films} from '../../../../mocks/films';
import { RoutePath } from '../../../Routers/AppRouter/config/routerConfig';

const BreadcrumbsHeader = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [breadcrumb, setBreadcrumb] = useState<string>('');

  useEffect(() => {
    axios.get<Films>(`https://12.react.pages.academy/wtw/films/${id}`)
      .then((res) => setBreadcrumb(res.data.name));
  },[id]);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={generatePath(RoutePath.film, {id})} className="breadcrumbs__link">{breadcrumb}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

export default BreadcrumbsHeader;
