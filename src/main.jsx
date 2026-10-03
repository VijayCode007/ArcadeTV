import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Games from './Pages/Games.jsx'
import HowToUse from './Pages/HowToUse.jsx'
import WatchTV from './Pages/WatchTV.jsx'
import Credits from './Pages/Credits.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  { path:"/" , element:<App/> },
  { path:"/games" , element:<Games /> },
  { path:"/television" , element:<WatchTV/> },
  { path:"/help", element: <HowToUse /> },
  { path:"/credits" , element: <Credits /> },
  { path:"/*" , element : <PageNotFound /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
