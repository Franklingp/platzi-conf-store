import React from 'react';

//components
import Header from './Header';
import Footer from './Footer';

//styles
import '../styles/components/Layout.css';

function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
