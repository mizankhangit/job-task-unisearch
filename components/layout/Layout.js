import React from "react";
import Head from "next/head";
import Header from "../header/Header";

const Layout = ({ children, title = "Unisearch app" }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;