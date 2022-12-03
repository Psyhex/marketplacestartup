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
import { ABOUT, ADD_SERVICE, HOME, LOGIN, REGISTER, SERVICE, SERVICES, USER_PROFILE } from './constants/routes';

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
            <Route path={REGISTER} element={<Register />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={ADD_SERVICE} element={<AddService />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;