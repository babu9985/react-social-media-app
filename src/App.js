import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from './components/NavBar/NavBar';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';

function App() {
  const currentuser = true;
  const Layout = () => {
    return (
      <div>
        <NavBar></NavBar>
        <div style={{ display: 'flex' }}>
          <LeftBar></LeftBar>
          <div style={{flex : 6}}>
            <Outlet />
          </div>
          <RightBar></RightBar>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children})=>{
    if(!currentuser){
      return <Navigate to='/login'></Navigate>
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/', element: (<ProtectedRoute><Layout></Layout></ProtectedRoute>), children: [
        { path: '/', element: <Home /> },
        { path: '/profile/:id', element: <Profile /> },
      ]
    },
    { path: '/login', element: <Login></Login> },
    { path: '/register', element: <Register></Register> },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
