import { StrictMode } from 'react'
import InventoryLadger from './pages/Boards/inventoryLadger.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.js'
import { CssBaseline } from '@mui/material'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

const router = createBrowserRouter([
  {
  path:"/",
  element: <App />,
  },
  {
    path:"/InventoryLadger",
    element: <InventoryLadger />,
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
