import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'

export default function App() {
  return (
    <div>
      <Home />
      <ProductList />
      <Product />
      <Login />
      <Register />
    </div>
  )
}
