import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieCatalog from './pages/MovieCatalog'
import RootLayout from './pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/', element: <MovieCatalog /> }]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
