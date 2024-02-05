import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,Route, Outlet
} from "react-router-dom";
import { Register } from './pages/Register';
import {Login} from './pages/Login';
import  Single  from './pages/Single';
import  {Home} from './pages/Home';
import  NavBar  from './components/NavBar';
import Footer  from './components/Footer';
import { Write } from './pages/Write';

const Layout=()=>{
  return(
    <>
    <NavBar/>
    <Outlet/>
     <Footer/>
    </>
  )
}
export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {path:'/',
      element:<Home/> 
      },
      {path:'/post/:id',
      element:<Single/> 
      },
      {path:'/write',
      element:<Write/> 
      },
      
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
]);
function App() {
  return (
    <div className='app'>
       <div className='container'>
       <RouterProvider router = {router}/>
       </div>


    </div>
  );
}


