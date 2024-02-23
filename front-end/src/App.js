import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp.js';
import { CartProvider } from './components/ContextReducer.js';
import Cart from './components/screens/Cart.js';
import MyOrder from './components/screens/MyOrder.js';
import Payment from './components/screens/Payment.js';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
    <div>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/myOrder' element={<MyOrder/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/payment' element={<Payment/>}/>
     </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
