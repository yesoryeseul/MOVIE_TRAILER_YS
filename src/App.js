import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "routes/routing";
import GlobalStyles from "styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const client = new QueryClient();

	return (
		<QueryClientProvider client={client}>
			<RouterProvider router={router} />
			<GlobalStyles />
		</QueryClientProvider>
	);
}

export default App;
