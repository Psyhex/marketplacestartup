import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import AddService from './pages/AddService';
import NavBar from './components/NavBar/NavBar';
import Container from '@mui/material/Container';
import { ABOUT, ADD_SERVICE, HOME, LOGIN, PRIVACY_POLICY, REGISTER, SERVICE, SERVICES, SERVICE_ID, USER_PROFILE } from './constants/routes';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl">
        <div className="App">
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={SERVICES} element={<Services />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={USER_PROFILE} element={<UserProfile />} />
            <Route path={SERVICE} element={<Service />} />
            <Route path={SERVICE_ID} element={<Service />} />
            <Route path={REGISTER} element={<Register />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={ADD_SERVICE} element={<AddService />} />
            <Route path={PRIVACY_POLICY} element={<PrivacyPolicy />} />
          </Routes>
        </div>
      </Container>
      <Footer/>
    </>
  );
}

export default App;