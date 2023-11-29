import Shop from './pages/Shop'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import BlogPage from './pages/Blog';
import WishListPage from './pages/WishList';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>} >
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
          </Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
