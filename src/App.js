import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
