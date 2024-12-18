import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import Help from './pages/Help'; // Import Help page
import Grievance from './pages/Grievance'; // Import Grievance page
import Grievreport from './pages/Grievreport';
import Report from './ReportS/report';
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/new-ticket'
              element={
                <PrivateRoute>
                  <NewTicket />
                </PrivateRoute>
              }
            />
            <Route
              path='/tickets'
              element={
                <PrivateRoute>
                  <Tickets />
                </PrivateRoute>
              }
            />
            <Route
              path='/ticket/:ticketId'
              element={
                <PrivateRoute>
                  <Ticket />
                </PrivateRoute>
              }
            />
            {/* Add Help and Grievance routes */}
            <Route path='/help' element={<Help />} />
            <Route path='/grievance' element={<Grievance />} />
            <Route path='/report' element ={<Tickets/>}/>
            <Route path='/final' element={<Report/>}/>
            {/* <Route path='/grivreport' element ={<Grievreport/>}/> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
