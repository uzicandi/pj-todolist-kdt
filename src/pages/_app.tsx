import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'jotai';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 5,
      staleTime: 1000 * 59,
      retry: 1,
    },
  },
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>);
}
