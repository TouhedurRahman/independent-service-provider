import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
