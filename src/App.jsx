import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Unauthorized from './pages/Unauthorized'
import User from './pages/User'
import Guest from './pages/Guest'
import Footer from './Components/Footer'
import Header from './Components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [

        {
          path: '/',
          element: <ProtectedRoutes roles={['admin', 'user', 'guest']}>
            < Guest />
          </ProtectedRoutes >

        },
        {
          path: '/admin',
          element: <ProtectedRoutes roles={['admin']}>
            <Admin />
          </ProtectedRoutes>
        },
        {
          path: '/user',
          element: <ProtectedRoutes roles={['admin', 'user']}>
            <User />
          </ProtectedRoutes>
        },

        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/unAuthorized',
          element: <Unauthorized />
        },
        {
          path: '*',
          element: <Login />
        }
      ]
    },

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App


