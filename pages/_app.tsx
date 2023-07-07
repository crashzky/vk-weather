import { AppProps } from 'next/app';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'antd/dist/reset.css';

const font = Montserrat({
	weight: ['900', '700', '600', '500'],
	subsets: ['cyrillic'],
});

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className={font.className}>
				<Head>
					<title>
						VK Weather
					</title>
				</Head>
				<Component {...pageProps} />
			</div>
		</QueryClientProvider>
	);
};

export default App;
