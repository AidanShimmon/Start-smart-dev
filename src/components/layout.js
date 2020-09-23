import React from 'react'


import "normalize.css"
import "./global.scss"
import Header from "./header"
import Footer from "./footer" 

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <main className="main__content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout 