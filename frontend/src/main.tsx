import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
  import { ToastContainer } from 'react-toastify';

//query client  kurulum
const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  //query cliient sağlayıcısı
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools  />
    <ToastContainer/>
  </QueryClientProvider>

);
