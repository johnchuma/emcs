import logo from './logo.svg';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout';
import DashboardHome from './pages/dashboardHome';
import DashboardControl from './pages/dashboardControl';
import DashboardAlert from './pages/dashboardAlert';
import PrivateRoute from './auth/privateRoute';
import LoginPage from './auth/loginPage';
import RegisterPage from './auth/registerPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" index element={<LoginPage />} />
      <Route path="/register" index element={<RegisterPage />} />
      <Route path='/' element={<PrivateRoute>
                 <DashboardLayout/>
        </PrivateRoute>}>
        <Route path='/' element={<DashboardHome/>}/>
        <Route path='/control' element={<DashboardControl/>}/>
        <Route path='/alerts' element={<DashboardAlert/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
