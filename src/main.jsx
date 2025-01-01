import React, { Suspense } from 'react';
import NavbarComponent from './components/NavBar/NavBarComponent';
import './App.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Route, Routes } from 'react-router-dom';

// Lazy load the components
const HomeComponent = React.lazy(() => import('./components/Home/HomeComponent'));

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid"> {/* Use Bootstrap container */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
