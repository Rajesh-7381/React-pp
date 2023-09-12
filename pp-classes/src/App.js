import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer  from './components/footer';
import Dashboard from './PAGES/dashboard';
import Register from './PAGES/register';

function App() {
  return (
    <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        
       
      </Routes>
    
    </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
