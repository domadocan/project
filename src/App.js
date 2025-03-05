import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
// import AuntieAnnes from './pages/AuntieAnnes';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/auntieAnnes" celement={AuntieAnnes} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
