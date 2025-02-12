import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Main.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import {  HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <QueryClientProvider client={queryClient}>
 <AuthProvider>
   <HelmetProvider>

   <RouterProvider router={router}>
   </RouterProvider>
   </HelmetProvider>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
   </AuthProvider>
 </QueryClientProvider>
  
  </StrictMode>,
)
