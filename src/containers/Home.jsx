import React from 'react';
import { Helmet } from 'react-helmet';

//copmonents
import Products from '../components/Products';

function Home() {
  return (
    <>
      {/* Metadatos y seo */}
      <Helmet>
        <title>Platzi Conf Store - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@franklin_gp" />
        <meta name="twitter:creator" content="@franklin_gp" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>
      <div className="Home">
        <Products />
      </div>
    </>
  );
}

export default Home;
