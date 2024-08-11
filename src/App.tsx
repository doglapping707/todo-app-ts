import Router from "./router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            },
            mutations: {
                retry: false
            }
        }
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <ToastContainer hideProgressBar={true} />
        </QueryClientProvider>
    );
}
