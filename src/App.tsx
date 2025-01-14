import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/NavBarComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeComponent = React.lazy(() => import('./components/Home/HomeComponent'));

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            {/* Add other routes as needed */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
