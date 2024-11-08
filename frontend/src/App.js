// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Home from './components/Home';



const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ProductPage />} />
            <Route path="/add-product" element={<ItemList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
