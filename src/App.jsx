import React, { Suspense } from 'react';
import '@aws-amplify/ui-react/styles.css';
import NavbarComponent from './components/NavBar/NavBarComponent';
import './App.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Route, Routes } from 'react-router-dom';

// Lazy load the components
const HomeComponent = React.lazy(() => import('./components/Home/HomeComponent'));
const ResumeComponent = React.lazy(() =>  import('./components/Resume/ResumeComponent'));
const ContactComponent = React.lazy(() =>  import('./components/Contact/ContactComponent'));

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid"> {/* Use Bootstrap container */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/resume" element={<ResumeComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
