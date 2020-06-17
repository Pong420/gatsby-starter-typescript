import React, { ReactNode } from 'react';
import { SEO } from '../SEO';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SEO />
      {children}
    </>
  );
};
