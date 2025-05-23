import React, { Suspense } from 'react';
import '@aws-amplify/ui-react/styles.css';
import NavbarComponent from './components/NavBar/NavBarComponent';
import './App.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load the components
const HomeComponent = React.lazy(() => import('./components/Home/HomeComponent'));
const ResumeComponent = React.lazy(() =>  import('./components/Resume/ResumeComponent'));
const ContactComponent = React.lazy(() =>  import('./components/Contact/ContactComponent'));
const PythonComponent = React.lazy(() =>  import('./components/Python/PythonComponent'));
const ComputerComponent = React.lazy(() =>  import('./components/ComputerScience/ComputerScienceComponent'));
const AIComponent = React.lazy(() =>  import('./components/ArtificialIntelligence/ArtificialIntelligenceComponent'));

function App() {
  return (
    <>
<NavbarComponent />
      <div className="container-fluid">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/resume" element={<ResumeComponent />} />
            <Route path="/python" element={<PythonComponent />} />
            <Route path="/computer" element={<ComputerComponent />} />
            <Route path="/training" element={<AIComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/ai" element={<AIComponent />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
