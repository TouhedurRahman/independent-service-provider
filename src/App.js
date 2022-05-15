import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ServiceDeatails from './Components/ServiceDeatails/ServiceDeatails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/services/:serviceId' element={<ServiceDeatails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
