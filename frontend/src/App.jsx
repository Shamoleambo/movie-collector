import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieCatalog from './pages/MovieCatalog'
import MoviePage from './pages/MoviePage'
import RootLayout from './pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <MovieCatalog /> },
      { path: '/movies/:id', element: <MoviePage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
