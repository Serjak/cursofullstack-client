// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

///Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";

const routesAdmin = [
	{
		path: "/admin",
		layout: LayoutAdmin,
		element: AdminHome,
	},
	{
		path: "/admin/login",
		layout: LayoutAdmin,
		element: AdminSignIn,
	},
	{
		path: "/admin/*",
		layout: LayoutAdmin,
		element: Error404,
	},
];

const routesClient = [
	{
		path: "/",
		layout: LayoutBasic,
		element: Home,
	},
	{
		path: "/contact",
		layout: LayoutBasic,
		element: Contact,
	},
	{
		path: "/*",
		layout: LayoutBasic,
		element: Error404,
	},
];

const routes = [...routesAdmin, ...routesClient];

export default routes;
