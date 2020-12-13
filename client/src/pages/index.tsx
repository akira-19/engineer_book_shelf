import React from 'react';
import { PrivateRoute } from '../components/Routes';
import Profile from '../components/Profile';

const IndexPage = () => {
  return <PrivateRoute component={Profile} />;
};

export default IndexPage;
