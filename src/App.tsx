import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/NavBarComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeComponent = React.lazy(() => import('./components/Home/HomeComponent'));

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container-fluid">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            {/* Add other routes as needed */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
