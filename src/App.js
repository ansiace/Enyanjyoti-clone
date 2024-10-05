import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Resolved spacing issue
import Navbar from './Navbar.js';
import Hom from './Hom.js';
import Educ from './Educ.js';
import Quiz from './Quiz.js';
import Craft from './Craft.js';
import Sef from './Sef.js';
import Act from './Act.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Hom />} />
            <Route path='educ' element={<Educ />} />
            <Route path='sef' element={<Sef />} />
            <Route path='craft' element={<Craft />} />
            <Route path='quiz' element={<Quiz />} />
            <Route path='act' element={<Act />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;