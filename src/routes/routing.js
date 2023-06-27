import Layout from "layout";
import Main from "pages/main";
import NowPalying from "pages/now-playing";
import TopRated from "pages/top-rated";
import Upcoming from "pages/upcoming";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/nowplaying",
				element: <NowPalying />,
			},
			{
				path: "/upcoming",
				element: <Upcoming />,
			},
			{
				path: "/top-rated",
				element: <TopRated />,
			},
		],
	},
]);

export default router;
