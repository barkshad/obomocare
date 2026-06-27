import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';
import { Sponsorship } from './pages/Sponsorship';
import { GetInvolved } from './pages/GetInvolved';
import { Stories } from './pages/Stories';
import { Impact } from './pages/Impact';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Budget } from './pages/Budget';
import { AdminLogin } from './pages/AdminLogin';
import { Admin } from './pages/Admin';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';

const PublicRoutes: React.FC = () => {
  return (
    <Layout>
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route path="/" element={<Home />} />
        <ReactRouterDOM.Route path="/about" element={<About />} />
        <ReactRouterDOM.Route path="/programs" element={<Programs />} />
        <ReactRouterDOM.Route path="/programs/:id" element={<ProgramDetail />} />
        <ReactRouterDOM.Route path="/sponsorship" element={<Sponsorship />} />
        <ReactRouterDOM.Route path="/get-involved" element={<GetInvolved />} />
        <ReactRouterDOM.Route path="/stories" element={<Stories />} />
        <ReactRouterDOM.Route path="/gallery" element={<Gallery />} />
        <ReactRouterDOM.Route path="/impact" element={<Impact />} />
        <ReactRouterDOM.Route path="/budget" element={<Budget />} />
        <ReactRouterDOM.Route path="/contact" element={<Contact />} />
        <ReactRouterDOM.Route path="*" element={<ReactRouterDOM.Navigate to="/" replace />} />
      </ReactRouterDOM.Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ContentProvider>
        <ReactRouterDOM.HashRouter>
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/admin/login" element={<AdminLogin />} />
            <ReactRouterDOM.Route path="/admin" element={<Admin />} />
            <ReactRouterDOM.Route path="*" element={<PublicRoutes />} />
          </ReactRouterDOM.Routes>
        </ReactRouterDOM.HashRouter>
      </ContentProvider>
    </AuthProvider>
  );
};

export default App;
