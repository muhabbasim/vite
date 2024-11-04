import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/authContext.tsx'
import ReactQueryProvider from './providers/ReactQeuryProvider.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { Toaster } from 'sonner'
import Spinner from './components/spinner/Spinner.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/'>
  <AuthContextProvider>
    <ReactQueryProvider>
      <CartProvider>
        <Suspense fallback={<Spinner/>}>
          <Toaster/>
          <App />
        </Suspense>
      </CartProvider>
    </ReactQueryProvider>
  </AuthContextProvider>
</BrowserRouter>
)
