import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Details from './pages/Details';
import NavBar from './components/navbar';


function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/favorites' element={<Favourites/>} />
      <Route path='/receipe-item/:id' element={<Details/>} />
    </Routes>
    </div>
  );
}

export default App;
