import React from 'react';

import Header from './components/Header';
import Search from './components/Search';

import { GlobalStyles } from './styles/global';

function App() {
  
  return (
    <>
      <GlobalStyles />
      <Header />
      <Search />
    </>
  );
}

export default App;
