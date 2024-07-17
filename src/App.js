import './App.css';
import React from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import GlobalStyle from './GlobalStyled/GlobalStyled';


function App() {
  return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Banner />
        <Footer />
      </div>
  );
}

export default App;
