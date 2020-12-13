import React from 'react';

import { Navbar } from './parts/Navbar';

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);
