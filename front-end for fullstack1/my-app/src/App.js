import Auth from './Auth';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import NewProduct from './pages/productsnew/NewProduct';
import UserList from '../src/pages/userlist/UserList';
import Product from './pages/products/Product'
import Categories from './pages/categories/categories'
import NewCategory from './pages/categorynew/NewCategory';
import UpdateProduct from './pages/products/UpdateProduct';
import UpdateCategory from './pages/categories/UpdateCategory';
import ProtectedRoute from './ProtectedRoute';



function App() {
  return (
   <div>
  <Routes>
    <Route path='/' element={<Auth/>} /> 
    <Route path='/admin' element={<ProtectedRoute><Sidebar/></ProtectedRoute>} />
    <Route path='/products' element={<Product/>} />
    <Route path='/userlist' element={<UserList/>} />
    <Route path='/prod' element={<NewProduct/>} />
    <Route path='/categories' element={<Categories/>} />
    <Route path='/category' element={<NewCategory/>} />
    <Route path='/updateprod/:id' element={<UpdateProduct/>} />
    <Route path='/updatecategory/:id' element={<UpdateCategory/>} />
  
    </Routes>
   
    </div>
   );
}
export default App;

  
