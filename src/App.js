import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from './components/NavBar/NavBar';
import LeftBar from './components/LeftBar/LeftBar';
import RightBar from './components/RightBar/RightBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import { useContext } from 'react';
import { DarkModeContext } from './components/context/DarkModeContext';
import { AuthContext } from './components/context/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${!darkMode ? 'dark' :'light'}`}>
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
    if(!user){
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
