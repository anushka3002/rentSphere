import { ToastContainer } from 'react-toastify';
import './App.css';
import { Router } from './Routers/Router';

function App() {
  return (
    <div>
    <Router/>
    <ToastContainer position='bottom-right' />
    </div>
  );
}

export default App;
