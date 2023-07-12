import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Counter';
import TodoMain from './TodoList/TodoMain';
import { createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,Route,useNavigate,Outlet } from 'react-router-dom';
import RootLayout from './Cart/RootLayout';
import Dashboard from './Cart/Dashboard';
import Cart from './Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './FormPost/features/PostList';
import AddPostForm from './FormPost/features/AddPostForm';


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
{/* <RouterProvider router={router} /> */}
<AddPostForm />
<PostList />
    </div>
  );
}

export default App;
